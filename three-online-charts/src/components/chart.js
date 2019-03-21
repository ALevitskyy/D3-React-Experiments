import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import {make_plot,clean} from "../d3.js";
import "../css/chart.css"
export default class Chart extends Component{
	componentDidMount(){
		make_plot(this.props.data,
			ReactDOM.findDOMNode(this));
	};
	componentDidUpdate(){
        clean(ReactDOM.findDOMNode(this));
		make_plot(this.props.data,
			ReactDOM.findDOMNode(this));
	};
	render(){
		return(<div>
			     <h3>{this.props.title}</h3>
			     <svg className = "chart">
			     </svg>
			   </div>
			);
	}
}