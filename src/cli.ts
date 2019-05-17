#!/usr/bin/env node

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var program = _interopDefault(require('commander'));

// This is just an example atm
program
    .version('0.1.0') // TODO: Get dynamically
    .parse(process.argv);
