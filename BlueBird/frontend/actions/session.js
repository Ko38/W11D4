import * as SessionUtils from '../utils/session';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: RECEIVE_CURRENT_USER
})

export const createNewUser = function(formUser) {
  return function(dispatch){
    return SessionUtils.signup(formUser).then( (user) => {
      return dispatch(receiveCurrentUser(user))
    } )
  }
}

export const login = function (formUser) {
  return function (dispatch) {
    return SessionUtils.login(formUser).then((user) => {
      return dispatch(receiveCurrentUser(user))
    })
  }
}

export const logout = function () {
  return function (dispatch) {
    return SessionUtils.logout().then(() => {
      return dispatch(logoutCurrentUser())
    })
  }
}

window.createNewUser = createNewUser;
window.logout = logout;