import * as React from "react";

export interface HelloProps { 
    compiler: string,
    framework: string
}

const Hello = ({ compiler, framework }: HelloProps) => {
    return (
    <div className="btn btn-danger">
    <h1>Hello World! My first {compiler} {framework} app!</h1>
    </div>
    )
}

export default Hello;