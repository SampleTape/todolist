import * as ActionTypes from './actionTypes';

export default (state, action) => {
    let newTodos = [...state.todos];
    let index = newTodos.findIndex(todo => todo.id === action.id);
    switch(action.type) {
        case ActionTypes.ADD:
            let todo = {
                id: state.counter,
                what: action.what,
                status: 'todo',
            };
            newTodos.push(todo);
            return {...state, todos: newTodos, counter: state.counter + 1};
        case ActionTypes.DELETE: 
            newTodos.splice(index,1);
            return {...state, todos: newTodos};
        case ActionTypes.START:
            newTodos[index].status = 'doing';
            return {...state, todos: newTodos};
        case ActionTypes.FINISHED:
            newTodos[index].status = 'done';
            return {...state, todos: newTodos};
        case ActionTypes.FILTER:
            return {...state, filter: action.filter};
        default:
            return state;
    }
}