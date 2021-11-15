import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>A revolutionary way to purchase cars.</h1>
      <h3>Introducing Senso Education: informing car-buyers on the selection and financing of their vehicles, all in under five minutes.</h3>

      <img className="main-img" src={require('./../../img/landing/header/main-img.png').default} />
      <img className="left-background" src={require('./../../img/landing/header/left-background.png').default} />
      <img className="right-background" src={require('./../../img/landing/header/right-background.png').default} />
      <img className="top-background" src={require('./../../img/landing/header/top-background.png').default} />
    </div>
  )
}

export default Header
