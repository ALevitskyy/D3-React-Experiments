import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import { make_slider } from "../d3.js";
import {new_brush} from "../actions/index.js"
import "../css/slider.css"
class Slider extends Component{
	brush_callback = (brush_domain) => {
          this.props.dispatch(new_brush(brush_domain))
	}

	componentDidMount(){
        make_slider(this.props.data,
			       ReactDOM.findDOMNode(this),
			       this.brush_callback)
	}
	componentDidUpdate(){
		
        make_slider(this.props.data,
			       ReactDOM.findDOMNode(this),
			       this.brush_callback)
	}

	render(){
		return(<div>
			     <svg className = "slider">
			     </svg>
			   </div>
			   );
}}

const mapStateToProps = state => {
	return {data: state.data,
	        brush: new_brush}
}
export default connect(mapStateToProps)(Slider);