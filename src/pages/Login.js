import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../components/hooks/useFirebase';

const Login = () => {
    const {singInUsingGoogle} = useFirebase()
    return (
        <div>
            <button onClick={() => {singInUsingGoogle()}}>Google Login</button>
            <Link to="/emailSignIn">Email SignIn</Link>
        </div>
    );
};

export default Login;