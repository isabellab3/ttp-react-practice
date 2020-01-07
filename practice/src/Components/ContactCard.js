import React from 'react';
import PropTypes from 'prop-types';
import './ContactCard.css'

class ContactCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            mobileNumber: props.mobileNumber,
            workNumber: props.workNumber,
            email: props.email
        }
    }

    render() {
        return (
            <div className="Contact-Card">
                <p>{this.state.name}</p>
                <p>{this.state.mobileNumber}</p>
                <p>{this.state.workNumber}</p>
                <p>{this.state.email}</p>
            </div>
        )
    }
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    mobileNumber: PropTypes.string.isRequired,
    workNumber: PropTypes.string,
    email: PropTypes.string    
} 


export default ContactCard;
