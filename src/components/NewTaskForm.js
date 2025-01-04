import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCategories = categories.filter((category) => category !== "All");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    onTaskFormSubmit({
      text: text,
      category: category
    })

    setText("");
    setCategory("All");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {filteredCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;