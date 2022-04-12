import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const Login = () => {

    const auth = getAuth(app)
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    const [user] = useAuthState(auth)

    const logOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <h3>Please login!</h3>
            <br />
            <br />
            <button onClick={() => signInWithGoogle()} >Sign In With Google</button>
            <br />
            <button onClick={logOut}>Sign Out</button>
            <h2>{user?.displayName}</h2>       
        </div>
    );
};

export default Login;