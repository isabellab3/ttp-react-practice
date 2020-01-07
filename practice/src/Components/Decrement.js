import React from 'react';
import PropTypes from 'react'

class Decrement extends React.Component {
    constructor(props) {
        this.state = {
            count: props.count
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button>Decrement</button>
            </div>
        )
    }
}

Decrement.PropTypes = {
    count: PropTypes.number.isRequired
}


export default Decrement;
