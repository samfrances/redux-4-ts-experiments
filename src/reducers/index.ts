import { combineReducers } from "redux";
import todos, { TodoAction, TodoState } from "./todos";
import counter, { CounterAction, CounterState } from "./counter";

type CombinedAction = TodoAction | CounterAction;
interface CombinedState {
    todos: TodoState;
    counter: CounterState;
}

export default combineReducers<CombinedState, CombinedAction>({
    todos,
    counter
});
