import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Story from './Story';
import {fetchStories, viewBookmarks, viewTopStories, fetchBookmarkedStories} from '../../actions/stories'

export class HackerNews extends React.Component {
  componentDidMount(){
    console.log(this.props.bookmarks)
    this.props.dispatch(fetchStories());
    this.props.dispatch(fetchBookmarkedStories(this.props.bookmarks))
  }

  // storyArraySlice(){
  //   let slicedArray = this.props.storyArray.slice(0, 99);
  //   console.log(slicedArray);
  // }

  generateStories(){
    // console.log(this.props.stories);
    // console.log(this.props.stories.length);

    if(this.props.topStories && this.props.stories.length > 0){
      let stories = this.props.stories.map(story => <Story key={story.id} {...story} /> );
      console.log(stories);
      return stories;
    } else if (!this.props.topStories && this.props.bookmarks.length > 0) {
      this.props.dispatch()
      let stories = this.props.bookmarkedStories.map(story => <Story key={story.id} {...story} />);
      console.log(stories);
      return stories;
    } else if (!this.props.topStories && this.props.bookmarks.length === 0){
      let story = {
        url: "N/A",
        title: "Nothing bookmarked yet!",
        score: 0,
        by: "THE APP OVERLORDS"
      }
    }


  }

  onClickTopStories(){
    this.props.dispatch(viewTopStories())
  }

  onClickBookmarks(){
    console.log('in click')
    this.props.dispatch(viewBookmarks())
  }

  render(){
    return <div>
      <div className="header">
        <h1>Hacker News</h1>
        <span className="top-stories" onClick={()=>this.onClickTopStories()}>Top Stories</span>
        <span className="my-bookmarks" onClick={()=>this.onClickBookmarks()}>My Bookmarks</span>
      </div>
      <section className="article-list">
        {this.generateStories()}
      </section>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
    state: state,
    bookmarks: state.stories.bookmarks,
    topStories: state.stories.topStories,
    bookmarkedStories: state.stories.bookmarkedStories
  }
}

export default connect(mapStateToProps)(HackerNews);