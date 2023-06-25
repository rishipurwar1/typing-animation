import ReactTyped from "react-typed";

const App = () => {
  return (
    <div>
      <h1>
        Welcome to{" "}
        <ReactTyped
          strings={["My React App"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          showCursor={true}
        />
      </h1>
    </div>
  );
};

// Typewriter effect that showcases different roles or professions

// const App = () => {
//   return (
//     <div>
//       <h1>
//         I'm a{" "}
//         <ReactTyped
//           strings={["Developer", "Writer", "Designer"]}
//           typeSpeed={100}
//           loop
//           backSpeed={20}
//           cursorChar=">"
//           showCursor={true}
//         />
//       </h1>
//     </div>
//   );
// };

export default App;
