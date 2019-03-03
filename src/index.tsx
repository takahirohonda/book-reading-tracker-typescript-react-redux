import '../public/css/bootstrap.css'

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

console.log("index.tsx loaded")
ReactDOM.render (
    <App/>,
    document.getElementById("root") as HTMLElement
)
