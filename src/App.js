import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// Converting App to a class component from a functional component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mix" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
