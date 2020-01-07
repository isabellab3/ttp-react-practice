import React from 'react';
import PropTypes from 'react'


class Decrement extends React.Component {
    constructor(props) {
        this.state = {
            count: props.count
        }
    }

    render() {
        <div>
            <p>{this.props.name}</p>
            <p>{this.props.mobileNumber}</p>
            <p>{this.props.workNumber}</p>
            <p>{this.props.email}</p>
        </div>
    }
}

ContactCard.PropTypes = {
    count: PropTypes.number.isRequired
}


export default ContactCard;
