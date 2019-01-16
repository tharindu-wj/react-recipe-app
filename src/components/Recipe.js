import React from 'react';
import { Link } from 'react-router-dom'

const Recipe = ({recipe}) => (
  <div className="recipe-block col-sm-4">
  <Link to={{ pathname: `/recipe/${recipe.recipe_id}`}}>
    <div>
        <img src={recipe.image_url} alt={recipe.title}/>
        <h3>{recipe.title}</h3>
      </div>
    </Link>
  </div>
);

export default Recipe;