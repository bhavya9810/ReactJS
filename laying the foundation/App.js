import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const jsxHeading = (
  <h1 className="heading" id="heading">
    React third (03) episode using JSX started, for multiple lines jsx we need
    to put them in brackets '(,)'
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

//
