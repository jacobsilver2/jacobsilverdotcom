//constants
import * as actionTypes from '../actions/actionTypes';
//utility
import { updateObject } from '../../shared/utility';

const initialState = {
  posts: [],
  error: false,
}

const addPostSuccess = (state, action) => {
  const newPost = updateObject(action.postData, {id: action.id})
  return updateObject(state, {
    loading: false,
    posts: state.posts.concat(newPost)
  })
}

const editPost = (state, action) => {
  console.log(`editPost reducer.  The actions are ${action.post.content}, ${action.post.title} and ${action.postId}`)
  const postIndex = state.posts.findIndex(post => post.id === action.postId)
  let posts = [...state.posts]
  posts[postIndex] = {...posts[postIndex], content:action.post.content, title: action.post.title}
  return {...state, posts}
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST_START: return updateObject(state, {loading:true})
    case actionTypes.ADD_POST_SUCCESS: return addPostSuccess(state, action)
    case actionTypes.ADD_POST_FAIL: return updateObject(state, {loading: false})

    case actionTypes.REMOVE_POST: return {posts: state.posts.filter(post => post.id !== action.postId)};

    case actionTypes.GET_POSTS_START: return updateObject(state, {loading: true})
    case actionTypes.GET_POSTS_SUCCESS: return updateObject(state, {posts: action.posts, loading: false})
    case actionTypes.GET_POSTS_FAIL: return updateObject(state, {loading: false})

    case actionTypes.EDIT_POST: return editPost(state, action)
    default: return state;
  }
}

export default reducer;