import { combineReducers } from 'redux';
import isAuthenticated from './isAuthenticated'
import user from './user'

export default combineReducers({
    isAuthenticated,
    user
});
