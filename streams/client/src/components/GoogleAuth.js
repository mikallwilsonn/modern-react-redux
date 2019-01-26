import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'; 

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load( 'client:auth2', () => {
            window.gapi.client.init({
                clientId: '35576124016-orv6u2jjrbrqklq1s8bqlcqt3tdfe97u.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange( this.auth.isSignedIn.get() );
                this.auth.isSignedIn.listen( this.onAuthChange );
            });
        });
    }

    onAuthChange = ( isSignedIn ) => {
        if ( isSignedIn ) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn( this.auth.currentUser.get().getId() );
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if ( this.props.isSignedIn === null ) {
            return <div className="ui active centered inline loader"></div>;
        } else if ( this.props.isSignedIn ) {
            return (
                <button onClick={this.onSignOutClick} className="ui grey google button">
                    <i className="sign-out icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return this.renderAuthButton();
    }
}


const mapStateToProps = ( state ) => {
    return { isSignedIn: state.auth.isSignedIn }
}


export default connect( mapStateToProps, { signIn, signOut })( GoogleAuth );
