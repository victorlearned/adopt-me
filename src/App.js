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
  constructor(props) {
    super(props);

    // define the initial state
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ location: "Seattle, WA", output: "full" })
      .then(data => {
        let pets;
        // their API returns an object if only 1 pet but array w/multi pets
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        // set the new state
        this.setState({
          pets
        });
      });
  }
  // componentDidMount() {
  //   petfinder.breed.list({ animal: "dog" }).then(console.log, console.error);
  // }
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
