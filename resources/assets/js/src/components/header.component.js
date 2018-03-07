import React,{PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOutAction} from '../screens';

const mapStateToProps = state =>({
    isLoggedIn: state.auth.isLoggedIn,
    currentUser : state.auth.currentUser
});
const mapDispatchToProps = dispatch =>({
    signOutActionDispatch : () => dispatch(signOutAction()),
});

class HeaderComponent extends PureComponent{

    constructor(){
        super();
        this.state ={
            
        };
    }


    handleSignout(){
        this.props.signOutActionDispatch();
    }


    handleAuth(){
        if(this.props.isLoggedIn){
            return(
                [
                    <li key="1"><Link to="/question/ask" style={{fontSize:18}}>Ask a question</Link></li>,
                    <li key="2"><a style={{fontSize:18}} onClick={()=>this.handleSignout()}>Log out</a></li>
                ]
               
            );
        }else{  
            return(
            [
                <li key="1"><a href="/Login">Login</a></li>,
                <li key="2"><a href="/Register">Register</a></li>
            ]
        );
        }
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
                            Soen341SC4
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="app-navbar-collapse">
                        <ul className="nav navbar-nav">
                            &nbsp;
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {this.handleAuth()} 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export const Header = connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);