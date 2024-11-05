import React, { useState, useEffect } from "react";
import "./FilterBtn.css";

function Filter({ filterName, filterValues, onFilterChange, selectedValue }) {
  const [selectedFilter, setSelectedFilter] = useState(
    selectedValue || filterValues[0]
  );

  useEffect(() => {
    setSelectedFilter(selectedValue);
  }, [selectedValue]);

  const handleFilterClick = (value) => {
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="filter-container">
      <h2 className="filter-name">{filterName}</h2>
      {filterValues.map((value, index) => (
        <button
          key={index}
          className={`filter-button ${
            selectedFilter === value ? "selected" : ""
          }`}
          onClick={() => handleFilterClick(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Filter;
