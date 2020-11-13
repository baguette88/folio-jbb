import React from "react";

function Hello() {
  const sayHello = () => {
    alert("Hello");
  };

  return (
    <div className="App">
      <button onClick={sayHello}>Hello Component</button>
    </div>
  );
}

export default Hello;
