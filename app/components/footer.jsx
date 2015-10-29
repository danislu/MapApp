import React from 'react';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (<div>
            <h1>x: {this.props.center.x} y: {this.props.center.y}</h1>
            <button onClick={this.handleClick}>MapHeader</button>
        </div>);
    }
    
    handleClick(e){
        console.log('clicked');
        this.props.onActionClick(e);
    }
}