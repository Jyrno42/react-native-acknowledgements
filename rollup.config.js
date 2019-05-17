import path from 'path';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

const PKG_ROOT = process.cwd();
const PKG = require(path.join(PKG_ROOT, 'package.json'));

const configs = [];
const external = ['fs', 'path', 'redux-saga/effects'];

const createConfig = (input, output, tsconfigOverride) => ({
    input,
    external: [
        ...external,
        ...Object.keys(PKG.dependencies || {}),
        ...Object.keys(PKG.peerDependencies || {}),
    ],
    output,
    plugins: [
        resolve(),
        commonjs(),
        replace({
            exclude: 'node_modules/**',
            VERSION: PKG.version,
            delimiters: ['<@ ', ' @>'],
        }),
        typescript({
            cacheRoot: `${require('temp-dir')}/.rpt2_cache`,
            typescript: require('typescript'),
            tslib: require('tslib'),
            useTsconfigDeclarationDir: true,
            tsconfig: path.join(PKG_ROOT, '/tsconfig.json'),
            tsconfigOverride,
        }),
    ],
});

console.log(`\nBuilding ${PKG.name}`);


if (PKG.module) {
    configs.push(createConfig('./src/index.ts', {
        file: PKG.module,
        format: 'es',
    }, { compilerOptions: { declaration: true } }));
}

if (PKG.main) {
    configs.push(createConfig('./src/index.ts', {
        file: PKG.main,
        format: 'cjs',
    }, { compilerOptions: { declaration: true } }));
}


if (PKG.bin) {
    configs.push(createConfig(PKG.bin.replace(/lib\/(.+)\.js/, './src/$1.ts'), {
        file: PKG.bin,
        format: 'cjs',
        banner: '#!/usr/bin/env node\n',
    }, { compilerOptions: { declaration: true, target: 'es5' } }));
}


if (!configs.length) {
    console.error('Missing rollup configs');
    process.exit(1);
}

export default configs;
