import React from "react";

function PlantCard({plant}) {
  const {id, name, image, price} = plant


  function toggleStock(e){
    if (e.target.className === "primary"){
      e.target.className = ""
      e.target.innerText = "Out of Stock"
    } else {
      e.target.className = "primary"
      e.target.innerText = "In Stock"
    }
  }

  return (
    <li id = {id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick = {toggleStock} className="primary">In Stock</button>
    </li>
  );
}

export default PlantCard;
