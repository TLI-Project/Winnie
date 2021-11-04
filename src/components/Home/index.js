import React from "react";
import { Link } from 'react-router-dom';
import Header from "./../Header";
import "./home.scss";

const Home = () => {
    return (
        <div className="App">
   
            <Header></Header>
            <Link to='/login'>
                <button className='btn1'> Get started
                </button>
            </Link>

        </div>
    )
}

export default Home
