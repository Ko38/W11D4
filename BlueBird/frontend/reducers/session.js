import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const _nullSession = {
  currentUser: null
};

export default function (state = _nullSession, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign( {}, {currentUser: action.user} )
      break;
    case LOGOUT_CURRENT_USER:
      return _nullSession
      break;  
    default:
      return state;
      break;
  }
}