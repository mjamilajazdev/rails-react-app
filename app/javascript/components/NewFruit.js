import React from "react"
import PropTypes from "prop-types"
import { useState } from "react";

const NewFruit = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return(
    <form onSubmit={ (e) => {
      e.preventDefault();
      props.handleFormSubmit(
        name,
        description
      );
      e.target.reset();}
  }>
  <input onChange={e => setName(e.target.value)} placeholder='Enter the name of the item'/>
  <input onChange={e => setDescription(e.target.value)} placeholder='Enter a description' />
  <button>Submit</button>
</form>
  )
}

export default NewFruit;
