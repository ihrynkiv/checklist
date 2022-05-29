import React from "react";

function FilterButton({isPressed, name, setFilter}) {
  const handleFilterChange = () => {
    setFilter(name)
    window.localStorage.setItem('tab', name)
  }

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isPressed}
      onClick={handleFilterChange}
    >
      <span className="noselect">{name}</span>
    </button>
  );
}

export default FilterButton;
