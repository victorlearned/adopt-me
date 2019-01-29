import React from "react";

// createContext is a func that returns an object with 2 React
// in it: Provider and Consumer. Provider is how you scope where context goes
// A context wil only be available inside of the Provider. A consumer is how you consume from the above provider
// A Consumer accepts a function as a child & gives it the context which you can use.
const SearchContext = React.createContext({
  location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
