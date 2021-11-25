import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './login.scss';

const Login = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <div>
            <div className="login-wrapper">
                <div className="glass">
                    <div className="dashboard">
                        <h1> Find out the cost of your dream car in 5 minutes.</h1>
                    </div>
                    <form>
                        <h3> Log in to your account </h3>
                        <label>
                            <p>Username</p>
                            <input type="text" onChange={e => setUserName(e.target.value)} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" onChange={e => setPassword(e.target.value)} />
                        </label>
                        <div>

                            <Link to='/finance'>
                                <button className="btn" type="submit">Login</button>
                            </Link>
                        </div>
                        <h4> Don't have an account yet?</h4>
                        <Link to='/signup'>
                            <button className="btn" >Sign up for one.</button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
