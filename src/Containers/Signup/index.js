import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { signup } from '../../redux/actions/user.actions';

class Signup extends Component {
    state = {
        name: 'eva',
        username: 'airamave',
        email: 'airamave@gmail.com',
        password: 'Testing'
    }

    handle = (event, field) => {
        this.setState({
            [field]: event.target.value
        });
    }

    render() {
        const { email, name, username, password } = this.state;
        return(
            <div className="login-container">
                <span>Signup</span>
                <label>name</label>
                <input onChange={(event) => this.handle(event, 'name')} 
                value={name} 
                placeholder="name" />
                <label>username</label>
                <input onChange={(event) => this.handle(event, 'username')}
                value={username} 
                placeholder="username" />
                <label>email</label>
                <input onChange={(event) => this.handle(event, 'email')}
                value={email} 
                placeholder="email" />
                <label>password</label>
                <input onChange={(event) => this.handle(event, 'password')}
                value={password} 
                placeholder="password" />
                <div className="button-login">
                    <button onClick={() => this.props.signup(this.state)}>Signup</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
  const mapDispatchToProps = {
    signup
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Signup);