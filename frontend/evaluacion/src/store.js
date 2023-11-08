// store.js
import { createStore } from 'redux';
import rootReducer from './reducers/contadorReducer';

const store = createStore(rootReducer);

export default store;
