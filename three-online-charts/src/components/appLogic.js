import React from "react";
import {
    Component
} from "react";
import {
    random_vector
} from "../generate.js";
import Chart from "./chart.js";
import Slider from "./slider.js";
import {
    connect
} from "react-redux";
import {
    brush_data,
    get_data_row
} from "../helpers.js";
import {
    new_data_point
} from "../actions/index.js";
class AppLogic extends Component {
    componentDidMount() {
        setInterval(() => this.props.dispatch(
            new_data_point({
                "x": 1,
                "y": 1,
                "z": 1
            })), 500)
        // Test for future Onlinization of the chart:)
        // Not ready yet - uncontrolled brushing
        // Brush rerenders on every brush resulting in problems
        // Need to try to clean slider and add initial brush
        return !window.inProcessofDoingBrush
    }
    render() {
        return ( < div >
            <
            h1 > Hello React + D3! < /h1> <
            Chart data = {
                brush_data(
                    get_data_row(this.props.data, "x"),
                    this.props.brush)
            }
            title = "x" / >
            <
            Chart data = {
                brush_data(
                    get_data_row(this.props.data, "y"),
                    this.props.brush)
            }
            title = "y" / >
            <
            Chart data = {
                brush_data(
                    get_data_row(this.props.data, "z"),
                    this.props.brush)
            }
            title = "z" / >
            <
            h4 > I am a slider, use me))) < /h4> <
Slider data = {
    this.props.data
}
/> <
/div>);
}
}
const mapStateToProps = state => {
    return {
        data: state.data,
        brush: state.brush
    }
}
export default connect(mapStateToProps)(AppLogic);