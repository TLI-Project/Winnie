import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Login({ setToken }) {
    const [fullname, setFullName] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return(
        <div className="login-wrapper">
            <h1>Create your free account</h1>
            <form>
                <label>
                    <p>Full name</p>
                    <input type="text" onChange={e => setFullName(e.target.value)}/>
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Signup</button>
                </div>
                <h3> Already have an account?</h3>
                <Link to='/login'>
                    <button>Log in</button>
                </Link>
            </form>
        </div>
    )
}