import { combineReducers } from 'redux';

import machineReducer from './machine_reducer';
import serviceActionsReducer from './service_action_reducer'

const rootReducer = combineReducers({
    machines: machineReducer,
    serviceActions: serviceActionsReducer
});

export default rootReducer