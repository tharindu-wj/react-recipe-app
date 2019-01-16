import recipeReducer from './recipeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    recipe: recipeReducer
})

export default rootReducer