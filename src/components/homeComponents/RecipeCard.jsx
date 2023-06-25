import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  const { id, recipe_name, description, image } = recipe;
  const navigate = useNavigate(); // Access the navigation function

  const handleClick = () => {
    navigate(`/recipe/${id}`); // Navigate to the dynamic endpoint including the recipe ID
  };

  return (
    <div className="Recipe-Card">
      <img src='https://cdn.apexminecrafthosting.com/img/uploads/2021/09/29181800/steak.png' alt={recipe_name} />
      <h3 className="Recipe-Card-name">{recipe_name}</h3>
      <h4>{description}</h4>
      <button className="see-more" onClick={handleClick}>
        See More
      </button>
    </div>
  );
}

export default RecipeCard;