import React from 'react';
import start from '../images/start.png';
import finished from '../images/finished.png';
import deleteit from '../images/deleteit.png';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
        });
    }
    render() {
        let {when, what, where} = this.state.data;
        return (
            <div className="Item">
                <div className="ItemAttribute">
                    {when}
                </div>
                <div className="ItemAttribute">
                    {what}
                </div>
                <div className="ItemAttribute">
                    {where}
                </div>
                <div className="ItemAttribute">
                    {start}
                </div>
                <div className="ItemAttribute">
                    {finished}
                </div>
                <div className="ItemAttribute">
                    {deleteit}
                </div>
            </div>
        )
    }
}

export default Item;