import React  from "react";
import ReactDOM from "react-dom/client"

const container = React.createElement("div", { id: "container" }, [
  React.createElement(
    "div",
    { id: "section1",key:1},
    React.createElement("h1", { id: "Main_heading" }, "Namaste React")
  ),
  React.createElement(
    "div",
    { id: "section2",key:2},
    React.createElement("h1", { id: "Sub_heading" }, "Nested Element Creating and giving attributes")
  ),
]);
ReactDOM.createRoot(document.getElementById("root")).render(container)
