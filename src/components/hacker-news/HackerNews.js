import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Story from './Story';
import {fetchStories} from '../../actions/stories'

export class HackerNews extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchStories())
  }

  // storyArraySlice(){
  //   let slicedArray = this.props.storyArray.slice(0, 99);
  //   console.log(slicedArray);
  // }

  generateStories(){
    // console.log(this.props.stories);
    // console.log(this.props.stories.length);

    if(this.props.stories.length > 0){
      let stories = this.props.stories.map(story => <Story key={story.id} {...story} /> );
      console.log(stories);
      return stories;
    }
  }

  render(){
    return <div>
      <h1>Hacker News's Top Stories</h1>
      <section className="article-list">
        {this.generateStories()}
      </section>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
    storyArray: state.storyArray,
    state: state
  }
}

export default connect(mapStateToProps)(HackerNews);