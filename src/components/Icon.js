// Icon Component
import React from "react";
// Load Images
import poultry from "../icons/poultry.png";
import vegetarian from "../icons/veg.png";
import vegan from "../icons/vegan.png";
import meat from "../icons/meat.png";
import seafood from "../icons/seafood.png";

const icons = { poultry, vegetarian, vegan, meat, seafood };

const Icon = ({ type }) => {
  return (
    <div className="icon">
      <img src={icons[type.toLowerCase()]} alt={type} />
      <p>{type.toUpperCase()}</p>
    </div>
  );
};

export default Icon;
