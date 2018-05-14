const ADD_TODO = "ADD_TODO";

export interface TodoAction {
    type: typeof ADD_TODO;
    text: string;
}

export type TodoState = string[];

export default function todos(
    state: TodoState = [],
    action: TodoAction
) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}
