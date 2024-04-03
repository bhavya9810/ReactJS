import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const title2 = (
  <h1 className="title" id="hello">
    Namaste React again
  </h1>
);

const Title = () => <h1 className="title">Namaste React</h1>;

//React Functional Component

const data = 1000;

const HeadingComponent = () => {
  return (
    <div id="heading">
      <Title />
      <Title></Title>
      {Title()}
      {data}
      {title2}
      <h1 id="heading2">React functional Component 1</h1>
      <h2 id="heading3">React functional Component 2</h2>
      <h3 id="heading4">React functional Component 3 </h3>
    </div>
  );
};

const Search = () => {
  return <input type="text" placeholder="Search ..." id="search"></input>;
};
const Header = () => {
  return (
    <div id="header">
      <img
        src="https://cdn5.vectorstock.com/i/1000x1000/92/59/simple-lettering-bold-random-logo-vector-33589259.jpg"
        id="logo"
      ></img>
      {<Search />}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        id="logo"
      ></img>
    </div>
  );
};
console.log(Header);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

//
