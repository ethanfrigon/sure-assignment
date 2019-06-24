import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LandingPage from './components/landing-page/LandingPage';
import HackerNews from './components/hacker-news/HackerNews';
import Footer from './components/landing-page/Footer';
import './App.css';

export class App extends React.Component {
  render(){
    return <div 
      tabIndex={0}
      id="app"
      className="app"
      >
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/hacker-news" component={HackerNews} />
        <Route path="/" component={Footer} />
      </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default withRouter(connect(App));
