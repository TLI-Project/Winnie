import React from 'react'
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <h1> This is the login page! </h1>
        <h3> Already a user (takes you to /selection): </h3>
        <Link to='/selection'>
        <button>Login!</button>
        </Link>
        <h3> If not a user (takes you to /create-account): </h3>
        <Link to='/create-account'>
        <button>Not a user? Sign in.</button>
        </Link>
      </div>
    );
  }
}

export default Login;
