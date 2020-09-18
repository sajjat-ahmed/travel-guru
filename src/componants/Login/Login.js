import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase';
import { UserContext } from '../../App';
import Google from '../../Icon/google.png';
import Facebook from '../../Icon/fb.png';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser);
            history.replace(from)
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
    return (
        <div className="container">
            <div className="google-logo">
                <img onClick={handleGoogleSignIn} src={Google} alt="" />
                <p onClick={handleGoogleSignIn}>Sign-in with Google</p>
            </div>
            <div className="google-logo">
                <img src={Facebook} alt=""/>
                <p style={{marginLeft: '100px'}}>Sign-in with Facebook</p>
            </div>
        </div>
    );
};

export default Login;