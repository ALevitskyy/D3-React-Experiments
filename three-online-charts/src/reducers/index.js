import { combineReducers } from "redux";
import {NEW_DATA, NEW_BRUSH} from "../actions";
import { random_vector } from "../generate.js";
export default function reducers(state = {"data": random_vector(100), "brush": null},
                         action){
   // Need to combine to check whether slider is set up to the end of series
        if(action.type === NEW_BRUSH){
            return({...state, "brush":action.payload})
              }
             

        if(action.type === NEW_DATA){
           if(!state.brush){
             return({...state, "data": [...state.data, action.payload]})
           }

           if(state.brush[1] === (state.data.length-1)){
                // If the brush in the end follow updates
                  return ({"data":[...state.data, action.payload],
                          "brush":  [state.brush[0]+1,
                                    state.brush[1]+1] })  
               }
               return({...state, "data": [...state.data, action.payload]})
        }  
        return(state)}