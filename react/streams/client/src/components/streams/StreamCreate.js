import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions'

class StreamCreate extends Component {

    renderError = ({ error, touched}) => {
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        // console.log(this);
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
                <div className={className}>
                    <label>{ label }</label>
                    <input {...input} />
                    { this.renderError(meta) }
                </div>
            );
    }

    onSubmit = (formProps) =>{
        this.props.createStream(formProps);
    }

    render() {
        // console.log("dhksdjfhksjdh",this.props);
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}> 
                <Field name="title" component={this.renderInput} label="Enter title"></Field>
                <Field name="description" component={this.renderInput} label="Enter Description"></Field>
                <button className="ui button primary">submit</button>
                </form>
            </div>
        )
    }
}


const validate = (formValues) => {
    const errors = {};
    
    if(!formValues.title){
        errors.title = 'you must enter a title';
    }
    
    if(!formValues.description){
        errors.description = 'you must enter a description';
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)