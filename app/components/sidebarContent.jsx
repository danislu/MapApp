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
                <li key={ p.x + '-' + p.y + '-' + i  }>
                    <p>x: {p.x} y: {p.y}</p>
                    <button onClick={() => this.removeClicked(i)}>remove</button>
                </li>
            );
        });

        return (<ul>
             {items}
            </ul>);

    }
}

/*



<h4>{`x:${i.x} y:${i.y}`}</h4>

let points = this.props.points || [];
        let items = points.map((i, index)=> {
            return (
                <li key={i.x + '-' + i.y + '-' + index}>
                    <h4>{`x:${i.x} y:${i.y}`}</h4>
                    <button onClick={this.props.removePoint(index)}>x</button>
                </li>
            );
        });
        return (<ul>
            {items}
            </ul>);

*/