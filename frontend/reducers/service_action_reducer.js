import { RECIEVE_SERVICE_ACTION, REMOVE_SERVICE_ACTION } from '../actions/service_action_actions';

const serviceActionReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECIEVE_SERVICE_ACTION:
            return Object.assign({}, state, {[action.serviceAction.id]: action.serviceAction})
        case REMOVE_SERVICE_ACTION:
            let newState = Object.assign({}, state);
            delete newState[action.serviceAction.id]
        default:
            return state;
    }
}

export default serviceActionReducer;