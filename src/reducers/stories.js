import {FETCH_ALL_STORIES_SUCCESS, FETCH_INDIVIDUAL_STORY_SUCCESS, VIEW_BOOKMARKS, VIEW_TOP_STORIES, FETCH_INDIVIDUAL_BOOKMARK_SUCCESS, VIEW_HACKER_NEWS} from '../actions/stories';

const initialState = {
  storyArray: [],
  stories: [],
  landingPage: true,
  topStories: true,
  bookmarks: [],
  bookmarkedStories: []
};

export default (state=initialState, action) => {
  if (action.type === FETCH_ALL_STORIES_SUCCESS) {
    // console.log(action)
    return Object.assign({}, state, {
      storyArray: action.storyArray
    })
  } else if (action.type === FETCH_INDIVIDUAL_STORY_SUCCESS) {
    // console.log(action);
    return Object.assign({}, state, {
      stories: action.stories
    })
  } else if (action.type === VIEW_TOP_STORIES) {
    return Object.assign({}, state, {
      topStories: true
    })
  } else if (action.type === VIEW_BOOKMARKS) {
    // console.log(action)
    return Object.assign({}, state, {
      topStories: false
    })
  } else if (action.type === FETCH_INDIVIDUAL_BOOKMARK_SUCCESS) {
    // console.log(action)
    return Object.assign({}, state, {
      bookmarkedStories: action.stories
    })
  } else if (action.type === VIEW_HACKER_NEWS) {
    return Object.assign({}, state, {
      landingPage: false
    })
  }
  return state
}