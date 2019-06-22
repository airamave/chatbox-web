import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { login } from '../../redux/actions/user.actions';

class Login extends Component {
    render() {
        return(
            <div className="login-container">
                <span>Login</span>
                <label>email/username</label>
                <input placeholder="email/username" />
                <label>password</label>
                <input placeholder="password" />
                <button onClick={() => this.props.login()}>Login</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.isAuthenticated
    }
  }
  
  const mapDispatchToProps = {
    login
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
