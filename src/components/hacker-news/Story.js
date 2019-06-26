import React from 'react';
import {connect} from 'react-redux';

export class Story extends React.Component {

  addBookmarkStory(){
    console.log(this.props.id);
    const bookmark = this.props.id;
    let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    // bookmarkList = JSON.parse(bookmarkList);
    // console.log(bookmarkList);
    bookmarkList.push(bookmark);
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  }

  render(){
    // console.log(this.props)
    return <section className="story-container">
      <a className="story-title" href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title}</a><br></br>
      <span className="story-author">{this.props.by}</span><br></br>
      <span className="story-score">{this.props.score}</span><br></br>
      <button onClick={() => this.addBookmarkStory()}>Bookmark</button><br></br><br></br>
    </section>
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
    storyArray: state.storyArray,
    bookmarks: state.stories.bookmarks
  }
}

export default connect(mapStateToProps)(Story);