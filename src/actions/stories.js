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
export const fetchIndividualStorySuccess = (story) => {
  return {
    type: 'FETCH_INDIVIDUAL_STORY_SUCCESS',
    story
  }
}

export const fetchStories = () => (dispatch) => {
  dispatch(fetchAllStories());
  fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    .then(res => res.json())
    .then(stories => dispatch(fetchAllStoriesSuccess(stories)))
}