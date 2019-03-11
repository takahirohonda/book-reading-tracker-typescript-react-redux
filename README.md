## Book Reading Tracker with TypeScript React & Redux

This is an example of React & Redux with TypeScript. It has a form to enter book details and reading progress. The information get saved to the store and displayed on the result page.

Setup for this includes:

- TypeScript
- React & Redux
- Mocha and Istanbul
- Webpack

## Journey to TypeScript React & Redux Webpack Setup

### (1) Bare minimum to get started

#### (1-1) Setting up folder structure

```
- root
    - src
        -components
    - public
    - dist
    - test
```

#### (1-2) Installing dependencies

```bash
# install TypeScript
npm i --save-dev typescript

# install webpack
npm i --save-dev webpack
npm i --save-dev webpack-dev-server
npm i --save-dev webpack-cli

# install react and associated tools
npm i --save react react-dom @types/react @types/react-dom
npm i --save-dev ts-loader source-map-loader uglifyjs-webpack-plugin
npm i --save-dev source-map-loader

# install redux
npm install -S redux react-redux @types/react-redux

# install react router
npm i -S react-router-dom @types/react-router-dom

```
Note: using ts-loader. Can use awesome-typescript-loader instead.

#### (1-3) Add Webpack config

```javascript
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: './public',
        historyApiFallback: true,
        port: 3000
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" },
        { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
      ]
    },
    // Allowing browsers to cache between builds instead of bundling all dependencies - this somehow doesn't work.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        })
    ]
  };
```

#### (1-4) Add tsconfig

To import Json data directly, we need to set resolveJsonModule = true, then import as `import * as initalData from './initalData'`
skipLibCheck = true will make compilation time much faster for hot loading.

```
{
    "compilerOptions": {
      "outDir": "./dist/",
      "sourceMap": true,
      "noImplicitAny": true,
      "module": "commonjs",
      "target": "es5",
      "jsx": "react",
      "resolveJsonModule": true,
      "skipLibCheck" : true
    },
    "include" : [
        "./src/**/*"
    ]
}
```

#### (1-5) Add Script in package.json

```bash
"start": "webpack-dev-server --open",
"devbuild": "webpack --mode development",
"build": "webpack --mode production",
```

#### (1-6) Run and build

```bash
npm start
npm build
```

### (2) Adding eslint

#### (2-1) Install dependencies

```bash
npm i --save-dev eslint eslint-config-typescript @typescript-eslint/eslint-plugin
npm i eslint-plugin-react@latest --save-dev
```

### (2-2) Configure eslint
First add .eslintrc.json file to set up linting rules ([reference](https://www.mydatahack.com/using-editorconfig-and-eslint-in-node-js-project/))

Then, add the script in package.json. Prebuild command makes sure to run eslint before build (optional).
```bash
"eslint": "eslint src/*",
"prebuild": "npm run eslint",
```

For Typescript eslint, 

### (2-3) Run eslint

```bash
npm run eslint
```

### (3) Adding CSS (Bootstrap and styled-jsx)

#### (3-1) Install dependencies

```bash
npm i --save bootstrap
npm i --save-dev mini-css-extract-plugin style-loader css-loader
npm i styled-jsx --save
```

#### (3-2) Update webpack.config.js

We need to add a new rule for css. 

* Make sure to add style-loader first. Otherwise, you will get error!

```javascript
module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader"},
		{ test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
		{ test: /\.css$/, use: ['style-loader', 'css-loader']}
      ]
    },
```

Optionally you can use min-css-extract plugin.

```javascript
// import first 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// add this in the plugins: 
new MiniCssExtractPlugin({filename: "app.css"}),
```
#### (3-3) Adding bootstrap support

For bootstrap, create css folder in the public folder and import with bootstrap.css file first, then import it in index.tsx file. In this way, bootstrap will get compiled into a bundle.

bootstrap.css
```
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
```

index.tsx
```javascript
import '../public/css/bootstrap.css'
```

#### (3-4) Adding styled-jsx support

In the ./components/Style.tsx, we are using styled-jsx with <Style jsx global>. TypeScript will complain about jsx and global as it doesn't understand the type. We need to add their definitions in custom.d.ts in the root folder.

custom.d.ts
```javascript
import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: string;
    global?: string;
  }
}
```

### (4) Setting up Unit Test (Mocha, Sinon, Chai and Istanbul)

#### (4-1) Installing dependencies

All modules except Istanbul are required to install @type modules. Istanbul is written in TypeScript and doesn't require @type.

ts-node is required to hook mocha with TypeScript.

```bash
npm i chai mocha mocha-typescript sinon ts-node --save-dev
npm i @types/chai @types/mocha @types/sinon --save-dev
npm i --save-dev nyc
```

### (4-2) Add script into package.json

Istanbul reporter option html gives html coverage output in the coverage directory. text option displays the coverage table on the console when you run the test.
'-r ts-node/register' enables mocha to use TypeScript in the node environment.

Including both ts and tsx extension. tsx is for enzyme test.

```
"test": "nyc --reporter=html --reporter=text mocha -r ts-node/register -r jsdom-global/register -r unitTestSetup.ts test/**/*.ts test/**/*.tsx --recursive --timeout 5000",
"integration": "nyc --reporter=html --reporter=text mocha -r ts-node/register --recursive --timeout 5000 integration/**/*.ts"
```

Trouble shooting:
 'window is not defined' error can be overcome by installing jsdom-global and adding -r jsdom-global/register in mocha command

Optional nyc configuration example in package.json. In this way, coverage report covers all the test scripts, not directory specific.
```
 "nyc": {
    "extension": [
      ".ts",
      ".tsx"
    ],
    "exclude": [
      "**/*.d.ts"
    ],
    "reporter": [
      "html",
      "text"
    ],
    "all": true
  },
```
[reference](https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6)

### (5) Setting up Enzyme and JSDOM

#### (5-1) Installing dependencies

```bash
npm i enzyme jsdom jsdom-global enzyme-adapter-react-16
npm i @types/enzyme @types/jsdom @types/enzyme-adapter-react-16 --save-dev
npm i --save-dev react-test-renderer @types/react-test-renderer
```
Error handling

'It looks like you called `mount()` without a global document being loaded' error:
- Mocha doesn't run the test in a browser environment & enzyme's mount API requires a DOM. JSDOM is required to simulate a browser environment in a Node environment.

'window is not defined' error:
- It can be overcome by installing jsdom-global and adding -r jsdom-global/register in mocha command

Property 'window' does not exist on type 'Global' error:
- When we create setup file for JSDOM (unitTestSetup.ts on the root folder), we need to add browser properties to Node global environment as it does not have browser properties.
We can extend NodeJS.Global properties by adding interface and redefining the global variable with global Node variable. 

```javascript
interface Global extends NodeJS.Global {
  window: Window,
  document: Document,
  navigator: {
    userAgent: string
  }
}

const globalNode: Global = {
  window: window,
  document: window.document,
  navigator: {
    userAgent: 'node.js',
  },
  ...global
}
```
### (6) Setting up Redux

### (6-1) Installing dependencies

```bash
npm install -S redux react-redux @types/react-redux
```

### (6-2) Defining app's state

Create state definition file in src/types/index.tsx

```javascript
export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
}
```

### (7) Support for Google Chrome Redux DevTools 

For regular Javascript, you can simply do below. 

```javascript
import { createStore, compose } from 'redux'

let composeEnhancers
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers())
```

With TypeScript, you need to give __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ property to the window and pass it to the store. Otherwise, you will get the error Property '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' does not exist on type 'Window'.

```javascript
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers())
```