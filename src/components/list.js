import React from 'react';
import Item from './item';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
        });
    }
    render() {
        return (
            <div className="List">
                {this.state.data.map(itemData => {
                    return (
                        <Item data={itemData}></Item>
                    );
                })}
            </div>
        );
    }
}

export default List;