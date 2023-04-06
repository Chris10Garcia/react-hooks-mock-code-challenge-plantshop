import React, { useState } from "react";

function PlantCard({plant, handleOnClickDelete, updatePlantPrice}) {
  const {id, name, image, price} = plant

  const [updatePrice, setUpdatePrice] = useState(price)

  function toggleStock(e){
    if (e.target.className === "primary"){
      e.target.className = ""
      e.target.innerText = "Out of Stock"
    } else {
      e.target.className = "primary"
      e.target.innerText = "In Stock"
    }
  }


  function toggleAdjustPrice(e){
    e.target.parentNode.childNodes[5].hidden = !e.target.parentNode.childNodes[5].hidden
  }

  function onChangePrice(e){
    setUpdatePrice(e.target.value)
  }
  
  function handlePriceAdjustSubmit(e){
    e.preventDefault()
    updatePlantPrice(updatePrice, id)
    toggleAdjustPrice(e)
  }

  return (
    <li id = {id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick = {toggleAdjustPrice} >Adjust Price</button>
      <br></br>
      <form onSubmit={handlePriceAdjustSubmit} hidden={true}>
        <input onChange = {onChangePrice} type="number" step="0.01" value={updatePrice}></input>
        <button type="submit">Submit Change</button>
      </form>
      <button onClick = {toggleStock} className="primary">In Stock</button>
      <br></br>
      <button onClick = {() => handleOnClickDelete(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
