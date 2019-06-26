import React from 'react';
import {connect} from 'react-redux';
import {fetchBookmarkedStories} from '../../actions/stories';

export class BookmarkedStory extends React.Component {

  removeBookmarkStory(){
    const bookmark = this.props.id;
    let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    bookmarkList = bookmarkList.filter(id => id !== bookmark);
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    this.props.dispatch(fetchBookmarkedStories(bookmarkList));
  }

  render(){
    return <section className="story-container">
      <a className="story-title" href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title}</a><br></br>
      <span className="story-author">{this.props.by}</span><br></br>
      <span className="story-score">{this.props.score}</span><br></br>
      <button className="remove-bookmark"onClick={() => this.removeBookmarkStory()}>Remove Bookmark</button><br></br><br></br>
    </section>
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
  }
}

export default connect(mapStateToProps)(BookmarkedStory);