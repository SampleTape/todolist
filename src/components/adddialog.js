import React from 'react';
import * as Actions from '../actions';
import {connect} from 'react-redux';

import '../styles/adddialog.scss';

class AddDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            what: '',
        };
        this.handleAddTODO = this.handleAddTODO.bind(this);
        this.handleWhatChanged = this.handleWhatChanged.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleAddTODO() {
        this.props.addToDo(this.state.what);
        this.props.showAddDialog(false);
        this.setState({
            what: '',
        });
    }
    handleWhatChanged(e) {
        this.setState({
            what: e.target.value,
        });
    }
    handleCancel() {
        this.props.showAddDialog(false);
    }
    render() {
        return (
            <div className={`AddDialog ${this.props.showadddialog ? 'showAddDialog' : ''}`}>
                <div className="AddDialogTitle">Add</div>
                <textarea value={this.state.what} onChange={this.handleWhatChanged} />
                <div className="ButtonContainer">
                    <div className="CancelButton" onClick={this.handleCancel}>Cancel</div>
                    <div className="OKButton" onClick={this.handleAddTODO}>OK</div>
                </div>
            </div>
        );
    }   
}

function mapStateToProps(state) {
    return {
        showadddialog: state.showadddialog,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: function(what) {
            dispatch(Actions.add(what));
        },
        showAddDialog: function(show) {
            dispatch(Actions.showAddDialog(show));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDialog);