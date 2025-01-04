import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [newForm,setNewForm] = useState({
    text:"",
    category:""
  })
  function handleChange(event){
    const {name,value} = event.target;
    setNewForm(newForm =>({...newForm,[name]:value}))
  }
  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(newForm)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={newForm.text}/>
      </label>
      <label>
        Category
        <select name="category" value={newForm.category} onChange={handleChange}>
          {categories.map(item=>{
            if(item!=="All"){
              return(
                <option key={item} value={item}>{item}</option>
              )
            }
            
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;