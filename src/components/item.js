import React from 'react';
import * as Actions from '../actions';
import {connect} from 'react-redux';
import start from '../images/start.png';
import finished from '../images/finished.png';
import deleteit from '../images/deleteit.png';

import '../styles/item.scss';

function Item({id, what, startToDo, finishToDo,deleteToDo}) {
    console.log(what);
    return (
        <div className="Item">
            <div className="ItemAttribute text">
                {what}
            </div>
            <div className="ItemAttribute" onClick={startToDo}>
                <img src={start} alt="start" />
            </div>
            <div className="ItemAttribute" onClick={finishToDo}>
                <img src={finished} alt="finished" />
            </div>
            <div className="ItemAttribute" onClick={deleteToDo}>
                <img src={deleteit} alt="deleteit" />
            </div>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    let {todos} = state;
    return {
        what: todos[ownProps.id].what,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        startToDo: () => {
            dispatch(Actions.start(ownProps.id));
        },
        finishToDo: () => {
            dispatch(Actions.finished(ownProps.id));
        },
        deleteToDo: () => {
            dispatch(Actions.deleteit(ownProps.id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);