import { connect } from 'react-redux';
import { login } from '../../actions/session'
import Signin from './signin'


const mapDispatchToProps = dispatch => ({
  signin: formUser => dispatch(login(formUser))
})

// debugger

export default connect(null, mapDispatchToProps)(Signin);