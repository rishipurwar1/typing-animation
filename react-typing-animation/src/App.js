import React from "react";
import Typewriter from "./Typewriter";

const App = () => {
  return (
    <div>
      <h1>
        Welcome to <Typewriter text="My React App" delay={100} infinite />
      </h1>
    </div>
  );
};

export default App;
