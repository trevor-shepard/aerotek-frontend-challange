import { connect } from 'react-redux'

import EditForm from './EditForm'
import { recieveServiceAction, removeServiceAction} from '../actions/service_action_actions';


const mSTP = (state) => ({
    serviceActions: state.serviceActions
});

const mDTP = () => dispatch => ({
    recieveServiceAction: (serviceAction) => dispatch(recieveServiceAction(serviceAction)),
    removeServiceAction: (serviceAction) => dispatch(removeServiceAction(serviceAction))
});

export default connect(mSTP, mDTP)(EditForm)