import React from 'react';
import './LandingPage.css';
// import background from '.../images/blue-background.jpg';


export class LandingPage extends React.Component {
  render(){
    return <div className="App-Container">
      <nav className="Blue-Nav-default-sign-up">
        <img className="logo S" src="/images/Fill 1.png" alt="s"></img>
        <img className="logo U" src="/images/Fill 4 (U).png" alt="u"></img>
        <img className="logo R" src="/images/Fill 6 (R).png" alt="r"></img>
        <img className="logo E" src="/images/Fill 8.png" alt="e"></img>
        <img className="logo period" src="/images/Fill 10.png" alt="."></img>
        <span className="nav-item products">Products</span>
        <span className="nav-item support">Support</span>
        <span className="nav-item claims">Claims</span>
        <span className="nav-item download-app">Download App</span>
        <span className="nav-item login">Login</span>
        {/* <div className="button-container"> */}
          {/* <span className="nav-item sign-up">Sign Up</span> */}
          <button className="sign-up-button">Sign Up</button>
        {/* </div> */}
      </nav>
      <div className="Hero">
        <div className="Blue-BG">
          <img src="/images/blue-background2.jpg" alt="blue-background" className="Blue-BG"/>
          <div className="Path-3-Copy-2"></div>
          <div className="Path-3-Copy"></div>
          <div className="Path-3"></div>
          {/* <button>Get Started</button> */}
        </div>

      </div>
      <div className="Partners">
        
      </div>
      <div className= "Choose Solutions">

      </div>
      <div className="Coverage Options">

      </div>
      <div className="Group 3">

      </div>
      <footer className="Desktop Footer">

      </footer>
      
      <div className="BG">
      </div>

      </div>
  }
}

export default LandingPage