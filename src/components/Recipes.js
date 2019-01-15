import React, { Component } from 'react';

import Form from './Form'
import Recipe from './Recipe'

const API_KEY = "7a8e8fcfa2bf124d9ed561309586dd77";

class Recipes extends Component {
  state = {
    recipes : []
  }
  getRecipe = async (e) =>  {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)
    const data = await api_call.json();
    
    this.setState({
      recipes: data.recipes
    })
    console.log(this.state.recipes);
  }
  render() {
    return (
        <div className="recipe-list">
        <Form getRecipe = {this.getRecipe} />
      
        <div className="row">
        {
            this.state.recipes.map((recipe) => {
            return <Recipe recipe = {recipe} key={recipe.recipe_id}/>
          })
        }
        </div>
  </div>
    );
  }
}

export default Recipes;