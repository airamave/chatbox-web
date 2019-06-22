import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import  createSagaMiddleware  from 'redux-saga'
import reducers from './reducers';
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga)

export default store;
