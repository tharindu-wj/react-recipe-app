import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Recipes from './components/Recipes'
import RecipeDetail from './components/RecipeDetail'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <div className="container">
        <Switch>
        <Route exact path='/' component={Recipes} />
        <Route exact path='/recipe/:id' component={RecipeDetail} />
        </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;