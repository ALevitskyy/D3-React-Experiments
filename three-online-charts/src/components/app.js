import React from "react";
import { Component } from "react";
import Chart from "./chart.js";
import { random_vector } from "../generate.js"
export default class App extends Component{
	render(){
		return(<div>
			<Chart data = {random_vector(100)}> </Chart>
			   <Chart data = {random_vector(100)}> </Chart>
			   <Chart data = {random_vector(100)}> </Chart>
			   </div>);
	}
}
