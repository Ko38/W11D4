import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
})

const Auth = ({loggedIn, path,component:Component}) => {
  
  // debugger
  return (
  <Route
    path={path}
    render={ 
      (props) => {
        // debugger
        return loggedIn ? <Redirect to="/"/> : <Component {...props}/>}
     }
  />
)};

const Protected = ({ loggedIn, path, component: Component }) => {

  // debugger
  return (
    <Route
      path={path}
      render={
        (props) => {
          // debugger
          return !loggedIn ? <Redirect to="/login" /> : <Component {...props} />
        }
      }
    />
  )
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));