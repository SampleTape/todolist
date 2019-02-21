import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import List from './list';
import AddDialog from './adddialog';
import Filter from './filter';
import '../styles/todolistpanel.scss';

class ToDoListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.showAddDialog(true);
    }
    render() {
        return (
            <div className="ToDoListPanel">
                <Filter></Filter>
                <div className="TabContent">
                    <List></List>
                </div>
                <div className="addButton" onClick={this.handleClick}>
                    +
                    <div className="addButtonTriangle"></div>
                </div>
                <AddDialog></AddDialog>
            </div>
        );
    }
}

function mapStateTpProps(state) {
    return {};
}

function mapDispachToProps(dispatch) {
    return {
        showAddDialog: function(show) {
            dispatch(Actions.showAddDialog(show));
        }
    };
}

export default connect(mapStateTpProps, mapDispachToProps)(ToDoListPanel);