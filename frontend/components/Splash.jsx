import React, { Component } from 'react';
import Timeline from 'react-visjs-timeline'

import EditForm from './EditFormContainer'

import DateUtility from '../utils/date_utils'

class Splash extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            form: null,
            options: {
                width: '80%',
                height: '300px',
                stack: true,
                showMajorLabels: true,
                showCurrentTime: false,
                zoomable: false,
                horizontalScroll: true,
                type: 'range',
                align: "center",
                format: {
                  minorLabels: {
                    minute: 'h:mma',
                    hour: 'ha'
                  }
                }
            }
              
        };
    }

    handleClick(id) {
        return () => {
            
            this.setState({
                form: id
            })
        }
    }

    clearForm() {

    }
    
    render() {
        let DateUtil = new DateUtility(new Date());
        let form
        if (this.state.form) {
            
            form = <EditForm serviceAction={this.props.serviceActions[this.state.form]} />
        }

        let items = Object.values(this.props.serviceActions).map(serviceAction => {
            
            let startDate = DateUtil.getDayFromDate(new Date(), serviceAction.start)
            startDate.setHours(8)
            
            let endDate = DateUtil.calcEndDate(startDate, serviceAction.duration)
            
            let content = document.createElement('div')
            content.id = `service-action-${serviceAction.id}`
            content.innerText = `${serviceAction.id}) Engineers: ${serviceAction.engineers}`
            content.addEventListener('click', this.handleClick(serviceAction.id))
            content.classList.add('service-action')
            
           
            return {
                start: startDate,
                end: endDate,
                content: content
            }
        });

        return(
            <div id="timeline-container">
                
                <h1>Service Action Display</h1>
               
                <Timeline
                ref={this.timelineWrapperRef}
                options={this.state.options}
                items={items}
                />
                {form}
            </div>
        )
    }
}

export default Splash;