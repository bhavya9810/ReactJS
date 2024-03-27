//   const heading = React.createElement("h1", {}, "Hello world from React!");

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);

// const paragraph = React.createElement(
//   "p",
//   { id: "para1", class: "class1", dhwbdh: "djknd" },
//   "this is a paragraph!"
// );
// const image1 = React.createElement("img", {
//   src: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
//   alt: "random image",
// });

// console.log(paragraph);

// const renderPoint = ReactDOM.createRoot(document.getElementById("root"));
// console.log(renderPoint);

// renderPoint.render(paragraph);
// renderPoint.render(image1);

// {/* <div class="parent">
// <div class="child">
//   <h1>Nested elements using React !</h1>
//   <h2>Nested elements using React and siblings using react !</h2>

// </div>
//<div class="child2">
//   <h1>Nested elements using React !</h1>
//   <h2>Nested elements using React and siblings using react !</h2>

// </div>
// </div> */}

// const parent = React.createElement("div", { class: "parent" }, [
//   React.createElement("div", { class: "child" }, [
//     React.createElement("h1", {}, "Nested elements using React !"),
//     React.createElement(
//       "h2",
//       {},
//       "Nested elements using React and siblings using react !"
//     ),
//   ]),
//   React.createElement("div", { class: "child2" }, [
//     React.createElement("h1", {}, "Nested elements using React !"),
//     React.createElement(
//       "h2",
//       {},
//       "Nested elements using React and siblings using react !"
//     ),
//   ]),
// ]);

//to easy the above code we use JSX

// console.log(parent);

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parent);

const demo = React.createElement(
  "div",
  { id: "start" },
  React.createElement(
    "h1",
    {},
    React.createElement("ul", {}, [
      React.createElement("li", {}, [
        1,
        React.createElement("span", {}, " one"),
      ]),
      React.createElement("li", {}, [
        2,
        React.createElement("span", {}, " two"),
      ]),
      React.createElement("li", {}, [
        3,
        React.createElement("span", {}, " three"),
      ]),
    ])
  )
);

console.log(demo);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(demo);
