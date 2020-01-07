import React from 'react';
import PropTypes from 'prop-types'

class Decrement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.count
        }
    }

    decrement = () => {
        if (this.state.count === 0) {
            alert('Cannot be less than zero')
        } else {
            this.setState({ count: this.state.count - 1 })
        }

    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

Decrement.propTypes = {
    count: PropTypes.number.isRequired,
} 


export default Decrement;
