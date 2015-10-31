import React from 'react';
import { Link } from 'react-router'

export default class Navbar extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle-="collapse" data-target-="#navbar" aria-expanded="false" aria-controls="navbar" onClick={this.props.onOpenMenuClick}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">dsl:MapApp</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}