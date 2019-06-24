import React from 'react';
import {connect} from 'react-redux';

export class Story extends React.Component {

  render(){
    return <section className="story-container">
      <a className="story-title" href={this.props.stories[0].url}>{this.props.stories[0].title}</a>
      <p className="story-author">{this.props.stories[0].author}</p>
      <p className="story/score">{this.props.stories[0].score}</p>
    </section>
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
    storyArray: state.storyArray
  }
}

export default connect(mapStateToProps)(Story);