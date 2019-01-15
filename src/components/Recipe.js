import React from 'react';
import { Link } from 'react-router-dom'

const Recipe = props => (
  <div className="recipe-block col-sm-4">
  <Link to={{ pathname: `/recipe/${props.recipe.recipe_id}`}}>
    <div>
        <img src={props.recipe.image_url} alt={props.recipe.title}/>
        <h3>{props.recipe.title}</h3>
      </div>
    </Link>
  </div>
);

export default Recipe;