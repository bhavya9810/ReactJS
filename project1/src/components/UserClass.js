import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props);

    this.state = {
      userInfo: {
        name: "dummyName",
        location: "dummyLocation",
        public_repos: 12,
        followers: null,
        following: null,
        bio: "",
      },
      // count: 1,
      // count2: 100,
    };
    // console.log(this.props.name + "constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child component did mount");
    const data = await fetch("https://api.github.com/users/shubham");
    const response = await data.json();
    // console.log(response);
    // this.timer = setInterval(() => {
    //   console.log("set interval started");
    // }, 1000);
    this.setState({
      userInfo: response,
    });
  }

  componentDidUpdate() {
    // console.log(
    //   "component did mount completed now component did update will run"
    // );
  }

  componentWillUnmount() {
    // console.log("component will unmount triggers");
    // clearInterval(this.timer);
  }

  render() {
    // console.log(this.props.name + "render called");
    // const { name, place, contact } = this.props;
    // const { count, count2 } = this.state;

    const {
      name,
      location,
      public_repos,
      followers,
      following,
      bio,
      avatar_url,
    } = this.state.userInfo;
    // console.log(name);
    // console.log(location);
    return (
      <div className="user-card class-component">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Public repos: {public_repos}</h4>
        <h4>following: {following}</h4>
        <h4>followers: {followers}</h4>
        <h4>bio: {bio}</h4>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h4>{loggedInUser}</h4>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
