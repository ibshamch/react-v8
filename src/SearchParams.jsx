import React, { useState, useEffect } from "react";
const ANIMALS = ["", "bird", "cat", "dog", "rabbit", "raptile"];
import Results from "./Results";
import useBreedList from "./useBreedList";
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
  useEffect(() => {
    requestPets();
  }, []);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={location}
          placeholder="location"
          className="location"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="animal">Animals</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          {ANIMALS.map((animal) => {
            return <option key={animal}>{animal}</option>;
          })}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          disabled={breeds.length === 0}
        >
          {breeds.map((breed) => {
            return <option key={breed}>{breed}</option>;
          })}
        </select>
        <button>Submit</button>
      </form>
      <Results pets={pets} />;
    </div>
  );
};

export default SearchParams;
