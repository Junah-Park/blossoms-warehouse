import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/' className='login__logo' style={{ textDecoration: 'none', color:'white' }}>
                <h1>Blossoms Warehouse</h1>
            </Link>

            <div className='login__container'>
                <h2>Sign In</h2>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange=
                    {e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange=
                    {e => setPassword(e.target.value)}/>
                    <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing in, you agree to Blossoms
                    conditions of use and sale. Please see our business
                    agreement contract and privacy policy at <a href="www.blossomsdress.com">www.blossomsdress.com</a>.
                </p>

                <button onClick={register} type='submit' className='login__registerButton'>Create Account</button>
            </div>

        </div>
    )
}

export default Login
