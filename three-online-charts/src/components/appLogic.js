import React from "react";
import { Component } from "react";
import { random_vector } from "../generate.js";
import Chart from "./chart.js";
import Slider from "./slider.js";
import {connect} from "react-redux";
class AppLogic extends Component{
	get_data = (data,brush_domain) => {
           if (brush_domain===null){
			return data
		}
		return data.slice(brush_domain[0],brush_domain[1])
	                 }

	render(){
		console.log(this);
		return(<div>
			      <Chart data = {this.get_data(this.props.data,
			      	                      this.props.brush)}/>
			      <Chart data = {this.get_data(this.props.data,
			      	                      this.props.brush)}/>
			      <Chart data = {this.get_data(this.props.data,
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