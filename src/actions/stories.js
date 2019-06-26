export const FETCH_ALL_STORIES = 'FETCH_ALL_STORIES';
export const fetchAllStories = () => {
  return {
    type: 'FETCH_ALL_STORIES'
  }
}

export const FETCH_ALL_STORIES_SUCCESS = 'FETCH_ALL_STORIES_SUCCESS';
export const fetchAllStoriesSuccess = (storyArray) => {
  return {
    type: 'FETCH_ALL_STORIES_SUCCESS',
    storyArray
  }
}

export const FETCH_INDIVIDUAL_STORY = 'FETCH_INDIVIDUAL_STORY';
export const fetchIndividualStory = () => {
  return {
    type: 'FETCH_INDIVIDUAL_STORY'
  }
}

export const FETCH_INDIVIDUAL_STORY_SUCCESS = 'FETCH_INDIVIDUAL_STORY_SUCCESS';
export const fetchIndividualStorySuccess = (stories) => {
  return {
    type: 'FETCH_INDIVIDUAL_STORY_SUCCESS',
    stories
  }
}

export const VIEW_TOP_STORIES = 'VIEW_TOP_STORIES';
export const viewTopStories = () => {
  return {
    type: 'VIEW_TOP_STORIES'
  }
}

export const VIEW_BOOKMARKS = 'VIEW_BOOKMARKS';
export const viewBookmarks = () => {
  return {
    type: 'VIEW_BOOKMARKS'
  }
}

export const FETCH_INDIVIDUAL_BOOKMARK_SUCCESS = 'FETCH_INDIVIDUAL_BOOKMARK_SUCCESS';
export const fetchIndividualBookmarkSuccess = (stories) => {
  return {
    type: 'FETCH_INDIVIDUAL_BOOKMARK_SUCCESS',
    stories
  }
}

export const fetchStories = () => (dispatch) => {
  dispatch(fetchAllStories());
  fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    .then(res => res.json())
    .then(storyArray => storyArray.slice(0, 100))
    .then(storyArray => Promise.all(storyArray.map(storyId => fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)))
      .then(responses => {
        return Promise.all(responses.map(res => res.json()))}))
      .then(stories => dispatch(fetchIndividualStorySuccess(stories)))
}

export const fetchBookmarkedStories = (bookmarkArray) => (dispatch) => {
  console.log(bookmarkArray);
  Promise.all(bookmarkArray.map(storyId => fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)))
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(stories => dispatch(fetchIndividualBookmarkSuccess(stories)))
}
