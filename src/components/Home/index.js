import React from "react";
import { Link } from 'react-router-dom';
import Header from "./../Header";

const Home = () => {
    return (
        <div className="App">
            <Link to='/login'>
                <button> Login
                </button>
            </Link>
            <Header></Header>

        </div>
    )
}

export default Home
