import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Stores/rootReducer';
import api from './middleware/api';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, api)));

export default store;
