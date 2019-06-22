import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/createStore';
import  { login } from './redux/actions/user.actions'
import './App.css';
import { LOGIN, SIGNUP } from './constants';

import Login from './Containers/Login';
import Signup from './Containers/Signup';

function App() {
  return (
    
    <div className="App">
    <Router>
      <Switch>
        <Route path="/Home" component={() => "Home"} />
        <Route path="/" component={Signup} />
      </Switch>
    </Router>
  </div>
    
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = {
  login
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
