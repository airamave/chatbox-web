import { takeLatest, call } from 'redux-saga/effects';
import { LOGIN, SIGNUP, AUTHENTICATED } from '../constants'
import UserAPI from '../services/UserAPI';

function* isAuthenticated(action) {
     const {payload} = action
     try {
          const response = yield call (UserAPI.login, payload);
          console.log('is auth', response);
     } catch (error) {
          console.log(error);
     }
}

function* user(action) {
     const {payload} = action;
     try {
          const response = yield call (UserAPI.signup, payload);
          console.log('new', response);
     } catch (error) {
          console.log(error);          
     }
     console.log(' new user ')
}

export default [takeLatest(SIGNUP, user)];