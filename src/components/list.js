import React from 'react';
import {connect} from 'react-redux';
import Item from './item';

function List({todos, filter}){
    return (
        <div className="List">
            {todos.map((todo, key) => {
                return (
                    <Item id={todo.id} what={todo.what} key={key}></Item>
                );
            })}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(List);