import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions';

import '../styles/filter.scss';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.filter(e.target.id.split('-')[1]);
    }
    render() {
        return (
            <div className="TabTittle">
                <div className={`title ${this.props.filterName === 'todo' ? 'active' : ''}`}
                     id="filter-todo" 
                     onClick={this.handleClick}>To Do</div>
                <div className={`title ${this.props.filterName === 'doing' ? 'active' : ''}`}
                     id="filter-doing" 
                     onClick={this.handleClick}>Doing</div>
                <div className={`title ${this.props.filterName === 'done' ? 'active' : ''}`} 
                     id="filter-done" 
                     onClick={this.handleClick}>Done</div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        filterName: state.filter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filter: function(status) {
            dispatch(Actions.filter(status));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
