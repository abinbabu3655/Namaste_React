import React from "react";
import ReactDOM from "react-dom/client"


const heading = <h1>Namaste Abin</h1>

const App =()=><>
    {heading}
    <p>Welcome</p>
</>

const root = ReactDOM.createRoot(document.getElementById("root"))
// const rootcopy = ReactDOM.createRoot(document.getElementById("rootcopy"))

root.render(<App/>)
// rootcopy.render(heading)