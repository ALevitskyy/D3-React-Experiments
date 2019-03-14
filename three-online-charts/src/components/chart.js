import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import {make_plot} from "../d3.js";
import "../css/chart.css"
export default class Chart extends Component{
	componentDidMount(){
		make_plot(this.props.data,
			ReactDOM.findDOMNode(this));
	};
	componentDidUpdate(){
		make_plot(this.props.data,
			ReactDOM.findDOMNode(this));
	};
	render(){
		return(<div>
			     <svg className = "chart">
			     </svg>
			   </div>
			);
	}
}