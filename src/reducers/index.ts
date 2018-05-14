const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

type Increment = {type: typeof INCREMENT}
type Decrement = {type: typeof DECREMENT}

export type CounterAction = Increment | Decrement;

export default (state = 0, action: CounterAction) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}
