import UserClass from "./UserClass";
import User from "./UserFunctionalComponent";
import { Component } from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>
//         Welcome to Foodcall - we deliver food which is tasty, healthy and cheap{" "}
//       </h2>
//       <br />
//       {/* <User
//         name={"SINGH BHAVYA (props using functional component)"}
//         place={"new york"}
//         contact={"@bhavya4"}
//       /> */}
//       <UserClass
//         name={"Bhavya Singh(class based component)"}
//         place={"atlanta"}
//         contact={"@singhBhvaya1122"}
//       />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent class component constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }

  componentDidUpdate() {
    console.log("parent did update called");
  }
  render() {
    console.log("parent class component render");

    return (
      <div>
        <h1>About class component</h1>
        <h2>
          {" "}
          Welcome to Foodcall - we deliver food which is tasty, healthy and
          cheap{" "}
        </h2>

        <UserClass
          name={"Bhavya Singh(class based component)"}
          place={"ahmedabad"}
          contact={"@singhBhvaya1122"}
        />
        <UserClass name={"Singh Singh(class based component)"} />
        <User
          name={"Bhavya Singh(class based component)"}
          place={"ahmedabad"}
          contact={"@singhBhvaya1122"}
        />
      </div>
    );
  }
}

export default About;
