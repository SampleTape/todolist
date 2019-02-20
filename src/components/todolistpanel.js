import React from 'react';
import List from './list';
import AddDialog from './adddialog';
import Filter from './filter';
import '../styles/todolistpanel.scss';

class ToDoListPanel extends React.Component {
    render() {
        return (
            <div className="ToDoListPanel">
                <Filter></Filter>
                <div className="TabContent">
                    <List></List>
                </div>
                <div className="addButton">+</div>
                <AddDialog></AddDialog>
            </div>
        );
    }
}

export default ToDoListPanel;