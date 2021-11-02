import React from "react";

import "./styles.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
      {/* NEED TO RE-ORGANIZE SELECTORS AND CLASS NAMES (this was just a test to get things working) */}
        <h1>a revolutionary way to purchase cars.</h1>
        <h3>introducing Senso Education: informing car-buyers on the selection and financing of their vehicles, all in under five minutes.</h3>

        <img className="main-img" src={require('./../../img/landing/header/main-img.png').default}/>

        <img className="left-background" src={require('./../../img/landing/header/left-background.png').default}/>
        <img className="right-background" src={require('./../../img/landing/header/right-background.png').default}/>
        <img className="top-background" src={require('./../../img/landing/header/top-background.png').default}/>
      </div>
    );
  }
}

export default Header;