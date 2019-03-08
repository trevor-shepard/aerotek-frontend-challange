import React from 'react';
import ReactDOM from 'react-dom';


import configureStore from './frontend/store';
import App from './frontend/components/App'

import { recieveServiceAction, removeServiceAction} from './frontend/actions/service_action_actions';


document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = {
        machines: {
            1: {
                service_actions: ["A", "D"]
            },
            2: {
                service_actions: ["B", "E"]
            },
            3: {
                service_actions: ["C"]
            }
        },
        serviceActions: {
            A: {
                id: "A",
                machine: 1,
                start: 0,
                engineers: 2,
                duration: 12
            },
            B: {
                id: "B",
                machine: 2,
                start: 1,
                engineers: 3,
                duration: 24
            },
            C: {
                id: "C",
                machine: 3,
                start: 2,
                engineers: 2,
                duration: 36
            },
            D: {
                id: "D",
                machine: 1,
                start: 3,
                engineers: 5,
                duration: 12
            },
            E: {
                id: "E",
                machine: 2,
                start: 4,
                engineers: 4,
                duration: 12
            }
        }
    };

    
    const store = configureStore(preloadedState);
     


    // // for testing
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.recieveServiceAction = recieveServiceAction
    window.removeServiceAction = removeServiceAction
    
    
    ReactDOM.render(<App store={ store } />, document.getElementById('root'))
});