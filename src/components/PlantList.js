import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsData, handleOnClickDelete, updatePlantPrice}) {

  return (
    <ul className="cards">
      {plantsData.map( plant => { 
            return(<PlantCard 
                        handleOnClickDelete={handleOnClickDelete} 
                        key={plant.id} 
                        plant={plant}
                        updatePlantPrice={updatePlantPrice}
                        />) } )}
    </ul>
  );
}

export default PlantList;
