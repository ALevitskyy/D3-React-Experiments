import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers/index.js";
import AppLogic from "./appLogic.js"

export default class App extends Component{
	render(){
		return( <Provider store={createStore(reducers)}>
			       <AppLogic/>
                  </Provider>
			   );
	}
}


