import React from 'react';
import Fruit from './Fruit';
const Body =(props)=> {

  let all_fruits = props.fruits.map((fruit) => {
    return(
     <div key={fruit.id}>
      <Fruit id={fruit.id} name={fruit.name} description={fruit.description} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
     </div>
    )
   })

  return(
    <div>
      {all_fruits}
    </div>
  )
}

export default Body;
