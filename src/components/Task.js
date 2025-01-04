import React from "react";

function Task({ id, category, text, removeTask }) {
  function handleDelete() {
    removeTask(id);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
