import { all } from 'redux-saga/effects';

import isAuthenticated from './isAuthenticated';

export default function* rootSaga() {
  yield all([...isAuthenticated]);
}
