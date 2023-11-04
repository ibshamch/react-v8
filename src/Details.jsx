import React from "react";
import { useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading....</h2>
      </div>
    );
  }

  if (result.isError) {
    return (
      <div className="error-pane">
        <h2>Error: {result.error.message}</h2>
      </div>
    );
  }

  const pet = result.data.pet[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
