import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import { make_slider, clean } from "../d3.js";
import {new_brush} from "../actions/index.js"
import "../css/slider.css"
class Slider extends Component{
    toBeUpdated = true;

	brush_callback = (brush_domain, to_be_updated) => {
		  this.toBeUpdated = to_be_updated;
          this.props.dispatch(new_brush(brush_domain));
	}

	componentDidMount(){
        make_slider(this.props.data,
			       ReactDOM.findDOMNode(this),
			       this.brush_callback,
			       this.props.brush)
	}
	componentDidUpdate(){
		clean(ReactDOM.findDOMNode(this));
        make_slider(this.props.data,
			       ReactDOM.findDOMNode(this),
			       this.brush_callback,
			       this.props.brush)
	}
	shouldComponentUpdate(){
		if(!this.toBeUpdated){return(false)};
		return(true);
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
	        brush: state.brush}
}
export default connect(mapStateToProps)(Slider);