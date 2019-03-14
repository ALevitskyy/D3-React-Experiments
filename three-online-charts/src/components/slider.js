import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { make_slider } from "../d3.js";
import "../css/slider.css"
export default class Slider extends Component{
	componentDidMount(){
        make_slider(this.props.data,
			       ReactDOM.findDOMNode(this))
	}
	componentDidUpdate(){
        make_slider(this.props.data,
			       ReactDOM.findDOMNode(this))
	}

	render(){
		return(<div>
			     <svg className = "slider">
			     </svg>
			   </div>
			   );
}}