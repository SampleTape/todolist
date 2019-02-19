import React from 'react';
import * as Actions from '../actions';
import {connect} from 'react-redux';

class AddDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            what: '',
        };
        this.handleAddTODO = this.handleAddTODO.bind(this);
        this.handleWhatChanged = this.handleWhatChanged.bind(this);
    }
    handleAddTODO() {
        this.props.addToDo(this.state.what);
    }
    handleWhatChanged(e) {
        this.setState({
            what: e.target.value,
        });
    }
    render() {
        return (
            <div className="AddDialog">
                <div className="title">Add</div>
                <textarea onChange={this.handleWhatChanged}></textarea>
                <button className="CancelButton">Cancel</button>
                <button className="OKButton" onClick={this.handleAddTODO}>OK</button>
            </div>
        );
    }   
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: function(what) {
            dispatch(Actions.add(what));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDialog);