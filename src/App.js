import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LandingPage from './components/landing-page/LandingPage';
import HackerNews from './components/hacker-news/HackerNews';
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
      </div>
  }
}

const mapStateToProps = state => {
  return {
    landingPage: state.stories.landingPage,
    state: state
  }
}

export default connect(mapStateToProps)(App);
