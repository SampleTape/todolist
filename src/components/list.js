import React from 'react';
import {connect} from 'react-redux';
import Item from './item';

import '../styles/list.scss';

function List({todos, filter}){
    return (
        <div className={`List ${filter}`}>
            {todos.map((todo, key) => {
                if (todo.status === filter) {
                    return (
                        <Item id={todo.id} what={todo.what} key={key}></Item>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(List);