import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './createaccount.scss';

const CreateAccount = ({ setToken }) => {
    const [fullname, setFullName] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <div className="login-wrapper">
            <h1>Create your free account</h1>
            <form>
                <label>
                    <p>Full name</p>
                    <input type="text" onChange={e => setFullName(e.target.value)} />
                </label>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <Link to='/selection'>
                        <button type="submit">Signup</button>
                    </Link>
                </div>
                <h3> Already have an account?</h3>
                <Link to='/login'>
                    <button>Log in</button>
                </Link>
            </form>
        </div>
    )
}

export default CreateAccount
