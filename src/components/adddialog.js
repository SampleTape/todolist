import React from 'react';
import * as Actions from '../actions';
import {connect} from 'react-redux';

function AddDialog({addToDo}) {
    return (
        <div className="AddDialog">
            <div className="title">Add</div>
            <textarea></textarea>
            <button className="CancelButton">Cancel</button>
            <button className="OKButton" onClick={addToDo}>OK</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToDo: function() {
            dispatch(Actions.add(ownProps.what));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDialog);