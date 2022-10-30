import React, { useState } from 'react'
const Fruit = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editable, setEditable] = useState(false);

  const handleEdit =()=>{
    if(editable){
      let fruit = {id: props.id, name: name.value, description: description.value}
      props.handleUpdate(fruit)
    }
    setEditable(!editable)
  }

  let name_field = editable ? (<input type='text' ref={input => setName(input)} defaultValue={props.name}/> ) : (<h3>{props.name}</h3>)
  let description_field = editable ? (<input type='text' ref={input => setDescription(input)} defaultValue={props.description}/> ): (<p>{props.description}</p>)

  return(
    <div>
      {name_field}
      {description_field}
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      <button onClick={() => handleEdit()}> {editable ? 'Submit' : 'Edit'} </button>
    </div>
  )
}

export default Fruit;
