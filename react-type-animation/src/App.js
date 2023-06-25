import { TypeAnimation } from "react-type-animation";

const App = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "I'm a Developer",
          1000,
          "I'm a Writer",
          1000,
          "I'm a Designer",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
    </div>
  );
};

export default App;
