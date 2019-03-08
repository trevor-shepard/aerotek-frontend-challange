import {RECEIVE_MACHINE, REMOVE_MACHINE} from '../actions/machine_actions';

const machineReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MACHINE:
            return Object.assign({}, state, {[action.machine.id]: action.machine});
        case REMOVE_MACHINE:
            let newState = Object.assign({}, state);
            delete newState[action.machine.id];
            return newState;
        default:
            return state;
    }
}

export default machineReducer;