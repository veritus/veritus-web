import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './Stores/rootReducer';
import api from './middleware/api';

export const history = createHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, api, routerMiddleware(history)))
);

export default store;
