import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const jsonURL = 'http://localhost:6001/plants'

  const [plantsData, setPlantsData] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(()=> {
    fetch(jsonURL)
    .then(r => r.json())
    .then(data => setPlantsData(data))
    
  }, [])


  function addPlants(formData){
    fetch(jsonURL,{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => setPlantsData([...plantsData, data]))
  }

  function handleOnChangeSearch(e){
    setSearchValue(e.target.value)
  }

  const filteredPlantsData = plantsData.filter(plant =>{
    return plant.name.toUpperCase().includes(searchValue.toUpperCase())
  })

  return (
    <main>
      <NewPlantForm addPlants={addPlants}/>
      <Search handleOnChangeSearch={handleOnChangeSearch} />
      <PlantList plantsData={filteredPlantsData}/>
    </main>
  );
}

export default PlantPage;
