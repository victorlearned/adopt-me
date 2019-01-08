import React from "react";
import ReactDOM from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// Converting App to a class component from a functional component
class App extends React.Component {
  componentDidMount() {
    petfinder.breed.list({ animal: "dog" }).then(console.log, console.error);
  }
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
