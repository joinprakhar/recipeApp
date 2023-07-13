// Recipe Component
import React, { useState, useEffect } from "react";

const Recipe = ({ recipeId, onExit, children }) => {
    const [recipeData, setRecipeData] = useState();
    useEffect(() => {
      fetch(`/api/recipe.id/${recipeId}`)
        .then((res) => res.json())
        .then(({ recipe }) => setRecipeData(recipe));
    }, [recipeId]);
  
    return (
      <div className="recipe-detail">
        <button className="btn small-btn" onClick={onExit}>
          X
        </button>
        <h2>LET'S COOK</h2>
        {recipeData && children(recipeData)}
      </div>
    );
  };
  

export default Recipe;
