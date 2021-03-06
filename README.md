# react-native-acknowledgements [![npm version](https://img.shields.io/npm/v/react-native-acknowledgements.svg?style=flat)](https://www.npmjs.com/package/react-native-acknowledgements)

When NPM packages are included in binary distributions like iOS and Android apps built with React Native, these are [closed source software where open source license obligations apply](https://www.tawesoft.co.uk/kb/article/mit-license-faq#can-i-use-mit-licensed-code-in-closed-source-software). This package fulfills the obligation to include the copyright notice.

Examples:
* https://discordapp.com/acknowledgements
* Simple Bank's iOS mobile app

* iOS (Settings.bundle compatible plist vs. custom in app display)
  * https://github.com/CocoaPods/cocoapods-acknowledgements (example https://github.com/cocoapods/CPDAcknowledgements)
  * https://github.com/carloe/LicenseGenerator-iOS
  * https://stackoverflow.com/questions/6428353/best-way-to-add-license-section-to-ios-settings-bundle
* Android
  * Not a single, common way of doing this, [one discussion is here](https://www.bignerdranch.com/blog/open-source-licenses-and-android/).
  * Provide a JSON object under assets which can be loaded and displayed in custom views

## Installation

Using NPM:
```
npm install --save react-native-acknowledgements
```

Using Yarn:
```
yarn add react-native-acknowledgements
```

## Automatically link

#### With React Native 0.27+

```shell
react-native link react-native-acknowledgements
```

## License

MIT.
