import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React third (03) episode started"
);
console.log(heading);

//JSX
const jsxHeading = (
  <h1 id="heading">React third (03) episode using JSX started</h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

//
