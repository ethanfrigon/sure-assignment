import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Story from './Story';
import {fetchStories} from '../actions/stories'

export class HackerNews extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchStories())
  }
  generateStories(){
    let stories = this.props.map(story => <Story key={story.id} {...story} /> )

  }
  render(){
    return <div>
      <h1>Hacker News's Top Stories</h1>

    </div>
  }
}

const mapStateToProps = state => {
  return {
    // stories: state.stories,
    // storyArray: state.storyArray,
    state: state
  }
}

export default connect(mapStateToProps)(HackerNews);