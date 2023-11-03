import React from "react";
import Pet from "./Pet";
const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          const { animal, name, breed, images, id } = pet;
          return (
            <Pet
              name={name}
              animal={animal}
              breed={breed}
              images={images}
              location={`${pet.city},${pet.state}`}
              id={id}
              key={id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
