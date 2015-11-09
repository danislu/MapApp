import React from 'react';

export default class SidebarContent extends React.Component {
    constructor(props){
        super(props);
        
        this.removeClicked = this.removeClicked.bind(this);
    }
    
    removeClicked(index){
        this.props.removePoint(index);
    }
    
    render(){
        let items = this.props.points.map((p, i) => {
            return (
                <div key={ p.x + '-' + p.y + '-' + i  }>
                    <p>x: {p.x} y: {p.y}</p>
                    <button onClick={() => this.removeClicked(i)}>remove</button>
                </div>
            );
        });

        return (
            <div style={{
                background: 'blue',
                height: '100%',
                width: '250px',
            }}>
                <h2>Menu</h2>
                {items}
            </div>
        );
    }
}