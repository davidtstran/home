import React from "react";
import * as PropTypes from "prop-types";

class Canvas extends React.Component {
    constructor() {
        super()
        this.canvas = React.createRef()
    }
    componentDidMount() {
        const ctx = this.canvas.current.getContext('2d')
        this.props.draw(ctx);
    }
    render() {
        return <canvas ref={this.canvas} />;        
    }
}
Canvas.propTypes = {
  draw: PropTypes.func.isRequired
};
export default Canvas