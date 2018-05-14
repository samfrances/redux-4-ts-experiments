import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

// This should fail typescript compilation:
store.dispatch({ type: "INVALID_ACTION" });
store.dispatch({ type: "ADD_TODO" });