// src/components/RecipeList.js
import React from "react";
import RecipeCard from "./recipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipeData, index) => (
        <RecipeCard key={index} recipe={recipeData.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
