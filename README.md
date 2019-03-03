## typescript-react-webpack-setup

Example set up for Typescript React Development environment including:

- TypeScript
- React
- Mocha and Istanbul
- JSDOM

## Journey to TypeScript React Webpack Setup

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
        }),
        new UglifyJsPlugin()
    ]
  };
```

#### (1-4) Add tsconfig

```
{
    "compilerOptions": {
      "outDir": "./dist/",
      "sourceMap": true,
      "noImplicitAny": true,
      "module": "commonjs",
      "target": "es5",
      "jsx": "react"
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

We need two packages, eslint and eslint-plugin-react
```bash
npm i --save-dev eslint
npm i eslint-plugin-react@latest --save-dev
```

### (2-2) Configure eslint
First add .eslintrc.json file to set up linting rules ([reference](https://www.mydatahack.com/using-editorconfig-and-eslint-in-node-js-project/))

Then, add the script in package.json. Prebuild is for the deployment pipeline
```bash
"eslint": "eslint src/*",
"prebuild": "npm run lint",
```

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
    jsx?: boolean;
    global?: boolean;
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

```
"test": "mocha -r ts-node/register test/**/*.ts --recursive --timeout 5000",
"integration": "mocha -r ts-node/register  --recursive --timeout 5000 integration/**/*.ts"
```

other examples (in progress)

```
"test": "nyc mocha --require test/setup.js --require @babel/register --recursive --timeout 5000 --require ignore-styles test/**/*.ts",
"integration": "mocha --require test/setup.js --require @babel/register --recursive --timeout 5000 --require ignore-styles integration/**/*.js"
```

Optional nyc configuration example in package.json
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

### (5) Setting up Enzyme and JSDOM

#### (5-1) Installing dependencies

```bash
npm i enzyme jsdom enzyme-adapter-react-16
npm i @types/enzyme @types/jsdom @types/enzyme-adapter-react-16 --save-dev
```


