import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import './signup.scss';
import CarImg from '../../img/landing/login/CarLogin.png';


const SignUp = () => {
    const [fullname, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleFullNameChange = e => {
        setFullName(e.target.value)
    }
    const handleUsernameChange = e => {
        setUserName(e.target.value)
    }
    const handlePasswordChange = e => {
        // Check that value is ASCII-readable
        setPassword(e.target.value)
    }
    const submit = () => {
        // fetch to verify, if ok, history.push
        if (fullname === '') {
            console.log('full name cannot be empty');
        }
        else if (username === '') {
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
                    <h3>Create your Free Account</h3>
                    <p className='left-text'>Full Name</p>
                    <input type="text" onChange={handleFullNameChange} value={fullname} />
                    <p className='left-text'>Username</p>
                    <input type="text" onChange={handleUsernameChange} value={username} />
                    <p className='left-text'>Password</p>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                    <button onClick={submit}>Create Account</button>
                    <h4 className='left-text'>Have an account already? <Link to='/login'>Login here</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default SignUp
