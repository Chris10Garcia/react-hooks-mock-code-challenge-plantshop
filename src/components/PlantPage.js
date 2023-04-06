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
    formData.price = parseFloat(formData.price)

    fetch(jsonURL,{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => setPlantsData([...plantsData, data]))
  }


  function deletePlants(id){
    fetch(jsonURL + "/" + id, {
      method: "DELETE",
      headers: {"Content-Type" : "application/json"}
    })
    .then(()=> {
      const newPlantDataList = plantsData.filter(plant => plant.id !== id)
      setPlantsData(newPlantDataList)
    })
  }

  async function updatePlantPrice(value, id){
    await fetch(jsonURL + "/" + id, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({price : parseFloat(value)})
    })
    .then(r => r.json())
    .then(data => {
      const newplantsData = plantsData.map(plant => {return plant.id === id ? data : plant})
      setPlantsData(newplantsData)
    })
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
      <PlantList updatePlantPrice={updatePlantPrice} plantsData={filteredPlantsData} handleOnClickDelete={deletePlants}/>
    </main>
  );
}

export default PlantPage;
