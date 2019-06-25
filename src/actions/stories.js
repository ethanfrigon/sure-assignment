export const FETCH_ALL_STORIES = 'FETCH_ALL_STORIES';
export const fetchAllStories = () => {
  return {
    type: 'FETCH_ALL_STORIES'
  }
}

export const FETCH_ALL_STORIES_SUCCESS = 'FETCH_ALL_STORIES_SUCCESS';
export const fetchAllStoriesSuccess = (storyArray) => {
  console.log(storyArray)
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
  // console.log(stories);
  return {
    type: 'FETCH_INDIVIDUAL_STORY_SUCCESS',
    stories
  }
}

export const fetchStories = () => (dispatch) => {
  dispatch(fetchAllStories());
  fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    .then(res => res.json())
    .then(storyArray => storyArray.slice(0, 100))
    // .then(storyArray => console.log(storyArray))
    // .then(storyArray => dispatch(fetchAllStoriesSuccess(storyArray)))
    .then(storyArray => Promise.all(storyArray.map(storyId => fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)))
      .then(responses => Promise.all(responses.map(res => res.json()))))
      .then(stories => dispatch(fetchIndividualStorySuccess(stories)))
      // .then(res => console.log(res))
      // .then(res => res.json())
      // .then(stories => console.log(stories))
    // .then(storyArray => console.log(storyArray))
    // .then(story => console.log(story))
}

// export const fetchIndividualStories = (storyId) => (dispatch) =>{
//   dispatch(fetchIndividualStory());
//   fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
//     // .then(res => res.json())
//     // .then(stories => console.log(stories))
//     // .then(stories => dispatch(fetchIndividualStorySuccess(stories)))
// }

// export const