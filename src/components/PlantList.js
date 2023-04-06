import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsData}) {

  return (
    <ul className="cards">
      {plantsData.map( plant => { return(<PlantCard key={plant.id} plant={plant}/>) } )}
    </ul>
  );
}

export default PlantList;
