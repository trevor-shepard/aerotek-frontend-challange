import { connect } from 'react-redux';

import Splash from './Splash';
import { recieveServiceAction, removeServiceAction} from '../actions/service_action_actions';

const mSTP = (state) => ({
    serviceActions: state.serviceActions,
    machines: state.machines
});

const mDTP = () => dispatch => ({
    recieveServiceAction: (serviceAction) => dispatch(recieveServiceAction(serviceAction)),
    removeServiceAction: (serviceAction) => dispatch(removeServiceAction(serviceAction))
});

export default connect(mSTP, mDTP)(Splash);