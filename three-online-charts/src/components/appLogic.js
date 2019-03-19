import React from "react";
import { Component } from "react";
import { random_vector } from "../generate.js";
import Chart from "./chart.js";
import Slider from "./slider.js";
import {connect} from "react-redux";
import {brush_data, get_data_row} from "../helpers.js";
import {new_data_point} from "../actions/index.js";
class AppLogic extends Component{
    componentDidMount(){
        //setInterval(() => this.props.dispatch(  
    	//      new_data_point({"x":1,"y":1,"z":1})),2000)
    	// Test for future Onlinization of the chart:)
    	// Not ready yet - uncontrolled brushing
    	// Brush rerenders on every brush resulting in problems
        // Need to try to clean slider and add initial brush
    }
	render(){
		console.log(this);
		return(<div>
			      <Chart data = {brush_data(
			      	               get_data_row(this.props.data,"x"),
			      	                      this.props.brush)}/>
			      <Chart data = {brush_data(
			      	               get_data_row(this.props.data,"y"),
			      	                      this.props.brush)}/>
			      <Chart data = {brush_data(
			      	               get_data_row(this.props.data,"z"),
			      	                      this.props.brush)}/>
			      <Slider data = {this.props.data}/>
			    </div>);
	}
}
const mapStateToProps = state => {
	return {data: state.data,
	        brush: state.brush}
}
export default connect(mapStateToProps)(AppLogic);