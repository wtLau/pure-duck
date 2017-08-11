import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

import { Forms } from '../../../api/forms.js';
import InstructorProfile from './InstructorProfile';
import ReviewSelector from '../../components/ReviewSelector';

import './style.css';
class InstructorProfileContainer extends Component {

    filterCohort = (cohort) => {
        Meteor.call('forms.filterCohort', cohort);
        return filterForms;
    }

    render () {
        return (
            <div className="instructor-container">
                <div className="instructor-select">
                    <h2>Select reviews:</h2>
                    <ReviewSelector 
                        onChangeAction={this.filterCohort}
                    />
                </div>
                <InstructorProfile 
                    forms={this.props.forms} 
                    className="review-cards"
                />
            </div>
        )
    }
}


InstructorProfileContainer.defaultProps = {
    forms: []
}

InstructorProfileContainer.propTypes = {
    forms: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        values: state.form.reviewSelector,
    };
}

InstructorContainer = createContainer(() => {
    return {
        forms: Forms.find({}).fetch(),
    };
}, InstructorProfileContainer);

export default connect(mapStateToProps)(InstructorContainer)