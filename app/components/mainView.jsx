import { default as React, Component } from 'react';
import { PageHeader } from 'react-bootstrap';

export default class MainView extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <PageHeader
                title={'React-Map-App'}
                subTitle={'The sub title'}
             >
             <p>hello hello hello hello</p>
            </PageHeader>
        );
    }
}
