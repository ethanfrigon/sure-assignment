import {FETCH_ALL_STORIES, FETCH_ALL_STORIES_SUCCESS, FETCH_INDIVIDUAL_STORY, FETCH_INDIVIDUAL_STORY_SUCCESS} from '../actions/stories';

const initialState = {
  storyArray: [],
  stories: [],
  page: true
};

export default (state=initialState, action) => {
  if (action.type === FETCH_ALL_STORIES_SUCCESS) {
    console.log(action)
    return Object.assign({}, state, {
      storyArray: action.storyArray
    })
  } else if (action.type === FETCH_INDIVIDUAL_STORY_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      stories: action.stories
    } )
  }
  return state
}