import * as ActionTypes from './actionTypes';

export const add = (what) => {
    return {
        type: ActionTypes.ADD,
        id: 0,
        what,
    };
};

export const deleteit = (id) => {
    return {
        type: ActionTypes.DELETE,
        id,
    };
};

export const start = (id) => {
    return {
        type: ActionTypes.START,
        id,
    };
};

export const finished = (id) => {
    return {
        type: ActionTypes.FINISHED,
        id,
    };
};

export const filter = (filter) => {
    return {
        type: ActionTypes.FILTER,
        filter,
    };
}

export const showAddDialog = (showadddialog) => {
    return {
        type: ActionTypes.SHOWADDDIALOG,
        showadddialog,
    }
}