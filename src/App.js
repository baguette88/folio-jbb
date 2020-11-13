import logo from "./logo.svg";
import "./App.css";

import Hello from "./components/sayHello.jsx";
import Component1 from "./components/component1.jsx";
import React, { useState } from "react";
import Tweet from "./components/tweet.jsx";
import Header from "./components/Header.jsx";
// import Hello from "./components/SayHello.jsx";

function App() {
  const [isRed, setRed] = useState(false);
  //[bhconst name, function]
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div>
      <h1 className={isRed ? "red" : "green"}>
        {/* <-- add correlating CSS --> */}
        <img src={logo} className="App-logo" alt="logo" />
      </h1>
      <Header></Header>
      <Hello></Hello>
      <Component1></Component1>
      <Tweet name="1" message="this is a tweet"></Tweet>
      <Tweet name="2"></Tweet>
      <Tweet name="3"></Tweet>
      <Tweet name="1" message="this is a tweet"></Tweet>
      <Tweet name="2"></Tweet>
      <Tweet name="3"></Tweet>
      <Tweet name="1" message="this is a tweet"></Tweet>
      <Tweet name="2"></Tweet>
      <Tweet name="3"></Tweet>
      <button onClick={increment}> Increment </button>
      <h1> {count} </h1>
    </div>
  );
}

export default App;
