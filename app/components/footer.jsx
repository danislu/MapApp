import React from 'react';
import { Navbar } from 'react-bootstrap';

export default class DslFooter extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <Navbar fixedBottom inverse>
                <a href="mailto:danislu@gmail.com">danislu</a>
            </Navbar>
        );
    }
}