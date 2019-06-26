import React from 'react';
import {connect} from 'react-redux';

export class Story extends React.Component {

  addBookmarkStory(){
    const bookmark = this.props.id;
    let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    if(bookmarkList){
      bookmarkList.push(bookmark);
    } else {
      bookmarkList = [];
      bookmarkList.push(bookmark)
    }
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  }

  render(){
    return <section className="story-container">
      <a className="story-title" href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title}</a><br></br>
      <span className="story-author">{this.props.by}</span><br></br>
      <span className="story-score">{this.props.score}</span><br></br>
      <button className="add-bookmark" onClick={() => this.addBookmarkStory()}>Bookmark</button><br></br><br></br>
    </section>
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories,
  }
}

export default connect(mapStateToProps)(Story);