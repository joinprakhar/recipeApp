// Select Component
import React from "react";

const Select = ({ label, options, onSet }) => {
    return (
      <div className="select-list">
        <span className="label">{label}</span>
        <select onChange={onSet} defaultValue="Select">
          <option disabled>Select</option>
          {options &&
            options.map((value, index) => <option key={index}>{value}</option>)}
        </select>
      </div>
    );
  };

export default Select;
