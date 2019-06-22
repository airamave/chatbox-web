import { takeLatest } from 'redux-saga/effects';
import { LOGIN } from '../constants'

function* isAuthenticated() {
     console.log('is authenticated saga')
}

export default [takeLatest(LOGIN, isAuthenticated)];