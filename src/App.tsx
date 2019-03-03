import * as React from "react";

import Style from "./components/Style";
import Hello from "./components/Hello";

const App = () => {
    return (
        <React.Fragment>
            <Style />
            <Hello compiler="TypeScript" framework="React" />
        </React.Fragment>
    )
}

export default App;