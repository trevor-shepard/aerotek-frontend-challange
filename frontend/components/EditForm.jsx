import React, { Component } from 'react';

import DateUtil from '../utils/date_utils'

class EditForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            duration: this.props.serviceAction.duration,
            engineers: this.props.serviceAction.engineers,
            errors: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        
        let util = new DateUtil(new Date())
        let newStart = util.parseDate(this.state.date)
        let dayNum = util.calcDaysAhead(newStart)
        

        if (dayNum < 0) {
            this.setState({
                errors: ['date must be in the future']
            })
        } else {
            let update = {
                duration: this.state.duration,
                engineers: this.state.engineers,
                start: dayNum
            }
            let updatedServiceAction = Object.assign({}, this.props.serviceAction, update)
            this.props.recieveServiceAction(updatedServiceAction)
        }      
    }

    render(){
        let errors

        if (this.state.errors.length) {
            errors = this.state.errors.map(error => <div className="error"> {error} </div>)
        }
        return(
            <div className='edit-form-container'>
                <h3>Edit Service Action: {this.props.serviceAction.id} </h3>
                <div className="edit-form"  onSubmit={this.handleSubmit}>
                    { errors }
                    <label className="edit-form-label">
                        Engineers:
                        <input className="edit-form-input" type="number" min="1" max="10" onChange={this.handleInput('engineers')} placeholder={this.state.engineers}/>
                    </label>

                    <label className="edit-form-label">
                        Start Date:
                        <input onChange={this.handleInput('date')} className="date-input" type="date" />
                    </label>

                    <label >
                        Duration (in hours):
                        <input className="edit-form-input" type="number" min="12" max="80" onChange={this.handleInput('duration')} placeholder={this.state.duration}/>
                    </label>
                    <input type="submit" className="edit-form-submit" onClick={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default EditForm;