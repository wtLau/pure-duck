import React, {Component} from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const cohortSelect = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => 
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}  
    />

const classSelect = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => 
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}  
    />

const formSelect = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => 
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}  
    />

const topicSelect = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => 
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}  
    />

const cohorts = [ 7, 8 ];
const appDevProjects = [
    'Boomtown',
    'Meteor',
    'Coding Interview',
    'r10',
    'Community Project'
];

const webDevProjects = [
    'Aloha',
    'Instanews',
    'Pong',
    'Inhabitent',
    'Mars Colony',
    'Community Project'
];

let ReviewSelector = ({onChangeAction, cohortSelectValue, classSelectValue, formSelectValue}) => {
        
    return (
        <div>
            <Paper
                style={style} 
                zDepth={2}
            >
                <div>
                    <Field
                        name="cohortSelect"
                        component={cohortSelect}
                        label="Select Cohort"
                    >
                        {cohorts.map((cohort) => (
                            <MenuItem
                                key={cohort}
                                primaryText={cohort}
                                value={cohort}
                            />
                        ))}
                    </Field>
                </div>
                {cohortSelectValue &&
                    <div>
                        <Field
                            name="classSelect"
                            component={classSelect}
                            label="Select a Class"
                        >
                            <MenuItem value="ADP" primaryText="App Development" />
                            <MenuItem value="WDP" primaryText="Web Development" />
                        </Field>
                    </div>
                }
                {classSelectValue &&
                    <div>
                        <Field
                            name="formSelect"
                            component={formSelect}
                            label="Select a Form"
                        >
                            <MenuItem value="lesson" primaryText="Lesson" />
                            <MenuItem value="topic" primaryText="Topic" />
                            <MenuItem value="project" primaryText="Project" />
                        </Field>
                    </div>
                }
                {formSelectValue === 'project' && classSelectValue === 'ADP' &&
                    <div>
                        <Field
                            name="topicSelect"
                            component={topicSelect}
                            label="What reviews do you want to read?"
                        >
                            {appDevProjects.map((project) => (
                                <MenuItem
                                    key={project}
                                    primaryText={project}
                                    value={project}
                                />
                            ))}
                        </Field>
                    </div>
                }
                {formSelectValue === 'project' && classSelectValue === 'WDP' &&
                    <div>
                        <Field
                            name="topicSelect"
                            component={topicSelect}
                            label="What reviews do you want to read?"
                        >
                            {webDevProjects.map((project) => (
                                <MenuItem
                                    key={project}
                                    primaryText={project}
                                    value={project}
                                />
                            ))}
                        </Field>
                    </div>
                } 
            </ Paper>
        </div>
    )
}

ReviewSelector = reduxForm({
  form: 'reviewSelector'
})(ReviewSelector)

const selector = formValueSelector('reviewSelector')

ReviewSelector = connect(state => {
    const cohortSelectValue = selector(state, 'cohortSelect')
    const classSelectValue = selector(state, 'classSelect')
    const formSelectValue = selector(state, 'formSelect')
    return {
        cohortSelectValue,
        classSelectValue,
        formSelectValue
    }
})(ReviewSelector)

export default ReviewSelector;