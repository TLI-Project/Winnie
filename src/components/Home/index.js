import React from "react";
import { Link } from 'react-router-dom';
import "./styles.scss";

import Header from "./../Header";

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Link to='/login'>
                    <button> Login
                    </button>
                </Link>
                <Header></Header>

            </div>
        );
    }
}

export default Home;
