import React from 'react';
import List from './list';
import AddDialog from './adddialog';
import '../styles/todolistpanel.scss';

class ToDoListPanel extends React.Component {
    render() {
        return (
            <div className="ToDoListPanel">
                <div className="TabTittle">
                    <div className="title">To Do</div>
                    <div className="title">Doing</div>
                    <div className="title">Done</div>
                </div>
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