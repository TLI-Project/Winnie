import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return(
        <body>
        <div className="login-wrapper">
            <h1>Already have an account? Login here!</h1>
            {/*Add form */}
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <Link to='/selection'>
                    <button type="submit">Login</button>
                    </Link>
                </div>
                <h3> Don't have an account yet? Sign up for one</h3>
                    <Link to='/create-account'>
                    <button>Sign up</button>
                    </Link>
            </form>
        </div>
        </body>
    )
}


// export default Login;

// import React from 'react'
// import { Link } from 'react-router-dom';
// import "./styles.css";
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
