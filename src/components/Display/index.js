import React from 'react'
import { Link } from 'react-router-dom';
import './display.scss';

const Display = () => {
    return (
        <div className="Display">
            <main className="container">
                <div className="left-column">
                    <img src="https://affinitycarrentals.com/wp-content/uploads/bfi_thumb/MDX-p5ohmlyhg58ums62auoyx0gh32olvo8f4qs7xbxhno.png">
                    </img>
                </div>

                <div className="right-column">
                    <div className="product-description">
                        <span>Ford Car</span>
                        <h1>FORD Focus</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.</p>
                    </div>
                    <div className="product-configuration">
                        <div className="product-color">
                            <span>Color</span>
                        </div>
                        <div className="cable-config">
                            <span>Cable configuration</span>

                            <div className="cable-choose">
                                <button>Straight</button>
                                <button>Coiled</button>
                                <button>Long-coiled</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-price">
                        <span>148$</span>
                        <a href="#" className="cart-btn">Add to cart</a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Display
