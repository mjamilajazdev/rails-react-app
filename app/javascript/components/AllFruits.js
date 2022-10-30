import React from 'react'
import Body from './Body';
import NewFruit from './NewFruit';
import { useState, useEffect } from 'react';
const AllFruits =()=> {

  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch('/api/v1/fruits.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFruits( data ) });
  },[]);

  const handleFormSubmit = (name, description)=>{
    console.log(name, description);
    let body = JSON.stringify({fruit: {name: name, description:   description} })
    fetch('http://localhost:3000/api/v1/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((fruit)=>{
      addNewFruit(fruit)
    })
  }

  const handleDelete=(id)=>{
    fetch(`http://localhost:3000/api/v1/fruits/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log('Item was deleted!')
    })
    deleteFruit(id);
  }

  const deleteFruit =(id)=> {
    let newFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(newFruits);
  }


  const addNewFruit =(fruit)=>{
    setFruits(
      fruits.concat(fruit)
    )
  }

  const handleUpdate=(fruit)=>{
    console.log('handle Update', fruit.id);
    fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({fruit: fruit}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response)
        updateFruit(fruit)
      })
  }

  const updateFruit=(fruit)=>{
    console.log('Update Fruits')
    let newFruits = fruits.filter((f) => f.id !== fruit.id)
    newFruits.push(fruit)
    setFruits(newFruits)
  }

  return(
    <div>
      <h1>To do: List of fruits</h1>
      <NewFruit handleFormSubmit={handleFormSubmit}/>
      <Body fruits={fruits} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  )
}

export default AllFruits;
