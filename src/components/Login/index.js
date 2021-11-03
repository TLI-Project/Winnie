import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <body>
            <div className="login-wrapper">
                <div className="glass">
                    <div className="dashboard">
                        <h1> Find out the cost of your dream car in 5 minutes.</h1>
                    </div>
                    {/*Add form */}
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

                            <Link to='/selection'>
                                <button className="btn" type="submit">Login</button>
                            </Link>
                        </div>
                        <h4> Don't have an account yet?</h4>
                        <Link to='/create-account'>
                            <button className="btn" >Sign up for one.</button>
                        </Link>
                    </form>
                </div>

            </div>
        </body>
    )
}


// export default Login;

// import React from 'react'
// import { Link } from 'react-router-dom';
// import "./login.css";
//
// class Login extends React.Component {
//   render() {
//     return (
//       <div className="Login">
//         <h1> This is the login page! </h1>
//           <div className="log-form">
//               <h2>Login to your account</h2>
//               <form>
//                   <input type="text" title="username" placeholder="username"/>
//                   <input type="password" title="username" placeholder="password"/>
//                   <button type="submit" className="btn">Login</button>
//                   <a className="forgot" href="#">Forgot Username?</a>
//               </form>
//           </div>
//         <h3> Already a user (takes you to /selection): </h3>
//         <Link to='/selection'>
//         <button>Login!</button>
//         </Link>
//         <h3> If not a user (takes you to /create-account): </h3>
//         <Link to='/create-account'>
//         <button>Not a user? Sign in.</button>
//         </Link>
//       </div>
//     );
//   }
// }
//
// export default Login;
