import { createStore } from 'redux';
import counter, { CounterAction } from './reducers';

const store = createStore(counter);

// This should fail typescript compilation:
store.dispatch({ type: "INVALID_ACTION" });
