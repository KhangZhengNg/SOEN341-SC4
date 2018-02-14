import React,{PureComponent} from 'react';
import {Link} from 'react-router-dom';

export class Header extends PureComponent{

    constructor(){
        super();
        this.state ={
            
        };
    }
    render(){
        return(
            <div id="app">
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>   
                        <Link className="navbar-brand" to="/">
                            Laravel
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="app-navbar-collapse">
                        <ul className="nav navbar-nav">
                            &nbsp;
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                                <li><a href="login">Login</a></li>
                                <li><a href="register">Register</a></li>
                                
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}