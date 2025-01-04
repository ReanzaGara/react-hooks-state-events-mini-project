import React, { useState } from "react";



function CategoryFilter({selectedCategory, categories, onSelectCategory}) {




  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>(<button key={category} 
      onClick={()=>onSelectCategory(category)} 
      className = {selectedCategory === category ? 'selected': ''}> {category} </button>
      ))}
      
    </div>
  );
}

export default CategoryFilter;