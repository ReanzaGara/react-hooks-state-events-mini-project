import React, { useState } from "react";
import Task from "./Task";

function TaskList({tasks, updateTasks}) {
  
  const deleteTask = (taskText)=>{
    const updatedTasks = (tasks.filter(task => task.text !== taskText));
   
    updateTasks(updatedTasks);//update parent state

  }

  
  return (
    <div className="tasks">
      {tasks.map(task=>(<Task key ={task.text} text={task.text} category={task.category}
      deleteTask = {deleteTask}/>))}
    </div>
  );
}

export default TaskList;