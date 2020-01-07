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
                <h3>{this.state.name}</h3>
                <span>Mobile</span><p>{this.state.mobileNumber}</p>
                <span>Work</span><p>{this.state.workNumber}</p>
                <span>Email</span><p>{this.state.email}</p>
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
