import React from "react";

const Categories = ({ filterItem, categories }) => {
  return (
    <div className="btn-Contianer">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItem(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
