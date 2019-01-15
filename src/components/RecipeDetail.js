import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const API_KEY = "7a8e8fcfa2bf124d9ed561309586dd77";

class RecipeDetail extends Component {

  state = {
    recipeDetail: []
  }

  recipe_id = this.props.match.params.id;

  componentDidMount = async () => {

    const api_call = await fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${this.recipe_id}`)
  
    const data = await api_call.json();
    
    this.setState({
      recipeDetail: data.recipe
    })
    console.log(this.state.recipeDetail);
  }

  render() {
    return (
        <div className="recipe-detail">
        <Link to='/'>Back to Home</Link>
        <h1>{this.state.recipeDetail.title}</h1>
        <img src={this.state.recipeDetail.image_url} alt={this.state.recipeDetail.title} />
        </div>
    );
  }
}

export default RecipeDetail;