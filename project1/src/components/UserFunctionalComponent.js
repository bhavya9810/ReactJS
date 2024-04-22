import { useState, useEffect } from "react";
const User = ({ name, place, contact }) => {
  let [count, setCount] = useState(0);
  const [count2, setCount2] = useState("00");
  console.log(count);
  console.log(contact);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("set interval started of functional");
    // }, 1000);
    fetchData();
    console.log("useEffect");

    return () => {
      // clearInterval(timer);
      console.log("unmounting phase of functional component, useeffect return");
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/bhavya9810");
    const response = data.json();
    console.log(response);
  };
  console.log("render");
  return (
    <div className="user-card">
      <h1>count= {count}</h1>
      <h1>count2= {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {place}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
