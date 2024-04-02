import React from "react";
import ReactDOM from "react-dom/client";

//JSX

const elem = <span>welcome to </span>;
const title2 = (
  <h1 className="title" id="hello">
    {elem}
    Namaste React again
  </h1>
);

const Title = () => <h1 className="title">Namaste React</h1>;

//React Functional Component

const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="heading">
      <Title />
      <h1>
        {number - 200}
        {console.log(number)}
      </h1>
      {title2}
      <h1 id="heading2">React functional Component 1</h1>
      <h2 id="heading3">React functional Component 2</h2>
      <h3 id="heading4">React functional Component 2</h3>
    </div>
  );
};
console.log(HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

//
