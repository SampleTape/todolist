import {createStore} from 'redux';
import reducer from './reducer';

const initialList = {
    todos: [
        {
            id: 0,
            what: 'dream',
            status: 'todo',
        }
    ],
    filter: 'todo',
    counter: 1,
};

const store = createStore(reducer, initialList);

export default store;