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
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <div>
          {this.state.pets.map(pet => {
            let breed;
            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ");
            } else {
              breed = pet.breeds.breed;
            }
            return (
              // Key is a unique identifier that we give React so it can do quick comparisons on objects.
              // All React knows is it got a new list. Without any further hinting, React would just destroy all the DOM objects and start over.
              // If we give it a unique key for each object, it can track that an object just moved positions and didn't actually get destroyed and just move the DOM object instead of re-rendering.
              <Pet
                animal={pet.animal}
                key={pet.id}
                name={pet.name}
                breed={breed}
                location={`${pet.contact.city}, ${pet.contact.state}`}
                media={pet.media}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
