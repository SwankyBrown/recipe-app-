import React, { useEffect, useState } from 'react';
import AdBanner from './AdBanner';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import "./SearchBar";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe) => {
      return <RecipeCard key={recipe.id} recipe={recipe} />;
    });

  const getRecipes = () => {
    axios
      .get('https://recipes.devmountain.com/recipes')
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <div className="Search-parent">
        <input
          className="Search"
          type="text"
          placeholder="🔍︎ Search for a Recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='RecipeCard-container'>{recipeDisplay}</div>
    </div>
  );
};

export default HomeScreen;