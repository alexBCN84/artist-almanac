import React, { Component } from 'react';

class Boundary extends Component {
    state = {
        error: null,
        errorInfo: null
    };


    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: true,
            errorInfo: errorInfo
        })

        console.log(errorInfo)
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Render children
        return this.props.children;
    }
};

export default Boundary;