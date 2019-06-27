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
        <span className="title">Sure + You.</span>
        <span className="subheader">Complement your core business and increase customer lifetime value with integrated offers from top-tier insurance carriers</span>
        <button className="get-started">Get Started</button>
        <img className="example" src="/images/Example.png" alt="example"></img>
      </div>
      <div className="Partners">
        <div className="partner-background"></div>
        <img className="chubb" src="/images/chubb.png" alt="chubb logo"></img>
        <img className="nationwide" src="/images/nationwide.png" alt="nationwide logo"></img>
        <img className="qbe" src="/images/QBE.png" alt="qbe logo"></img>
        <img className="assurant" src="/images/assurant.png" alt="assurant logo"></img>
        
      </div>
      <div className= "Choose Solutions">
        <span className="solutions">Choose the solution that's right for your business.</span>
        <div className="api">
          <img className="lessgreater solutions-image" src="/images/lessgreater.png" alt="less greater logo"></img>
          <span className="api-title solutions-title">API</span>
          <span className="api-content solutions-content">The Sure API is a set of RESTful endpoints that allow you to customize the look and feel for a truly native experience.</span>
        </div>
        <div className="iFrame">
          <img className="plug solutions-image" src="/images/plug.png" alt="plug"></img>
          <span className="iFrame-title solutions-title">iFrame</span>
          <span className="iFrame-content solutions-content">The iFrame solution allows for easy integration - simply place a line of code to embed an insurance form anywhere on your site.</span>
        </div>
        <div className="white-label">
          <img className="screen solutions-image" src="/images/screen.png" alt="screen"></img>
          <span className="white-label-title solutions-title">White Label</span>
          <span className="white-label-content solutions-content">Sure will build and host a branded page, which you can link to from a webpage or an email.</span>
        </div>

      </div>
      <div className="Coverage Options">
        <img className="lower-blue-bg" src="/images/lower-blue-background.png" alt="blue background"></img>
        <span className="options-title">Our partners come in all shapes and sizes, just like our policies.</span>
        <div className="pet">
          <img className="pet-image coverage-image" src="/images/pet.png" alt="pet icon"></img>
          <span className="pet-title coverage-title">Pet Coverage</span>
          <span className="pet-content coverage-content">Includes preventative, accident, and comprehensive</span>
          <div className="pet-rectangle coverage-rectangle"></div>
        </div>
        <div className="travel">
          <img className="travel-image coverage-image" src="/images/travel.png" alt="travel icon"></img>
          <span className="travel-title coverage-title">Travel Coverage</span>
          <span className="travel-content coverage-content">Includes baggage, car, rental, leisure, and flight policies</span>
          <div className="travel-rectangle coverage-rectangle"></div>
        </div>
        <div className="property">
          <img className="property-image coverage-image" src="/images/property.png" alt="property icon"></img>
          <span className="property-title coverage-title">Property Coverage</span>
          <span className="property-content coverage-content">Includes jewelry, collectibles, and smartphone policies</span>
          <div className="property-rectangle coverage-rectangle"></div>
        </div>
        <div className="catastrophic">
          <img className="catastrophic-image coverage-image" src="/images/catastrophic.png" alt="catastrophic icon"></img>
          <span className="catastrophic-title coverage-title">Catastrophic Event Coverage</span>
          <span className="catastrophic-content coverage-content">Includes weddings, and special events policies</span>
          <div className="catastrophic-rectangle coverage-rectangle"></div>
        </div>
        <div className="home">
          <img className="home-image coverage-image" src="/images/home.png" alt="home icon"></img>
          <span className="home-title coverage-title">Home Coverage</span>
          <span className="home-content coverage-content">Includes renters, evictions, and homeowners policies</span>
          <div className="home-rectangle coverage-rectangle"></div>
        </div>

      </div>
      <div className="Group 3">
        <img className="startup-background" src="/images/startup-background.png" alt="office-background"></img>
        <div className="background-shade"></div>
        <form>
          <span className="form-title">Contact our partnerships team today.</span>
          <input className="form first-name" type="text" placeholder="First Name"></input>
          <input className="form last-name" type="text" placeholder="Last Name"></input>
          <input className="form company" type="text" placeholder="Company"></input>
          <input className="form email" type="text" placeholder="Work Email"></input>
          <input className="submit" type="submit"></input>
        </form>
      </div>
      <footer className="Desktop Footer">

      </footer>
      
      <div className="BG">
      </div>

      </div>
  }
}

export default LandingPage