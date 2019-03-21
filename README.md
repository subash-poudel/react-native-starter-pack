# react-native-starter-pack
Super skinny starter pack for react native projects.

## Packages:
* [ESLint](https://eslint.org/) setup using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and [babel-eslint](https://github.com/babel/babel-eslint)
* [Prettier](https://prettier.io/) for code formatting
* [Husky](https://github.com/typicode/husky) for running eslint and prettier after every commit

## Prerequisites
* Node
* NPM
* Yarn
* [React Native Setup](https://facebook.github.io/react-native/docs/getting-started.html) using react-native-cli

## Installation

```
$ git clone --depth=1 git@github.com:subash-poudel/react-native-starter-pack.git <app-name>
$ cd <app-name>
$ rm -rf .git
$ git init // important should be done before installing dependencies
$ yarn   # or npm install
```

## Issues

Husky will not work if dependencies are installed before git init. Follow the installation instructions above. [Related link].(https://github.com/typicode/husky/issues/326#issuecomment-417274221)

