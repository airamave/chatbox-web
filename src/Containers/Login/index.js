import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { login } from '../../redux/actions/user.actions';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
   
    handle = (event, field) => {

    this.setState({
        [field]: event.target.value
    })
    }

    render() {
        const{ email, password } = this.state;
        return(
            <div className="login-container">
                <span>Login</span>
                <label>email/username</label>
                <input onChange={(event) => this.handle(event, 'email')}
                 value={email}
                 placeholder="email/username" />
                <label>password</label>
                <input onChange={(event) => this.handle(event, 'password')}
                 value={password}
                 placeholder="password" />
                <div className="button-login">
                    <button onClick={() => this.props.login({ email, password })}>Login</button>
                    <button>Sign up!</button>
                </div>
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


