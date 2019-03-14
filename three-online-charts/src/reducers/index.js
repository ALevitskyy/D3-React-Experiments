import { combineReducers } from "redux";
import {NEW_DATA, NEW_BRUSH} from "../actions";
import { random_vector } from "../generate.js";
function dataReducer(data = random_vector(100), action){
  // Need to change init
   if (action.type === NEW_DATA){
   return [...data, action.payload]
   }
   return data

}

function brushReducer(brush = null, action){
  console.log(action.payload);
	if(action.type === NEW_BRUSH){
        
        return action.payload
     }
     return brush
}

const reducers = combineReducers({
	data: dataReducer,
	brush: brushReducer
});
export default reducers;