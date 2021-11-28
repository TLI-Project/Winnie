import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import './login.scss';
import CarImg from '../../img/landing/login/CarLogin.png';

const Login = ({ setToken }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleUsernameChange = e => {
        setUserName(e.target.value)
    }
    const handlePasswordChange = e => {
        // Check that value is ASCII-readable
        setPassword(e.target.value)
    }
    const submit = () => {
        // fetch to verify, if ok, history.push
        if (username === '') {
            console.log('please enter your username');
        } else if (password === '') {
            console.log('please enter a password');
        } else {
            history.push('/finance')
        }
        
    }

    return (
        <div className='page page-login-signup'>
            <div className="left">
                <h1> Find out the cost of your dream car in 5 minutes.</h1>
                <img className="car-login" src={CarImg} />
            </div>
            <div className="right">
                <div className='wrapper'>
                    <h3>Log in to your account</h3>
                    <p className='left-text'>Username</p>
                    <input type="text" onChange={handleUsernameChange} value={username} />
                    <p className='left-text'>Password</p>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                    <button onClick={submit}>Login</button>
                    <h4 className='left-text'>Don't have an account yet? <Link to='/signup'>Sign up for one</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default Login
