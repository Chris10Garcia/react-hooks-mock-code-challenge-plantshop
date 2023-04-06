import React, { useState } from "react";

function NewPlantForm({addPlants}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleInputOnChange(e){
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData, [name]:value})
  }

  function handleFormSubmit(e){
    e.preventDefault()
    addPlants(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleFormSubmit}>
        <input onChange = {handleInputOnChange} type="text" name="name" placeholder="Plant name" />
        <input onChange = {handleInputOnChange} type="text" name="image" placeholder="Image URL" />
        <input onChange = {handleInputOnChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
