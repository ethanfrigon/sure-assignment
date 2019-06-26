import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Story from './Story';
import BookmarkedStory from './BookmarkedStory';
import {fetchStories, viewBookmarks, viewTopStories, fetchBookmarkedStories} from '../../actions/stories'

export class HackerNews extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchStories());
  }

  generateStories(){
    if(this.props.topStories && this.props.stories.length > 0){
      let stories = this.props.stories.map(story => <Story key={story.id} {...story} /> );
      return stories;
    } 
    else if (!this.props.topStories && JSON.parse(localStorage.getItem("bookmarkList"))) {
      let stories = this.props.bookmarkedStories.map(story => <BookmarkedStory key={story.id} {...story} />);
      return stories;
    } else {
      return null
    } 
  }

  onClickTopStories(){
    this.props.dispatch(viewTopStories())
  }

  onClickBookmarks(){
    let bookmarkedIdArray = JSON.parse(localStorage.getItem("bookmarkList"));
    if (bookmarkedIdArray){
      this.props.dispatch(fetchBookmarkedStories(bookmarkedIdArray))
    }
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
    topStories: state.stories.topStories,
    bookmarkedStories: state.stories.bookmarkedStories
  }
}

export default connect(mapStateToProps)(HackerNews);