import axios from '../../axios-musicGigs';
import * as actionTypes from './actionTypes';

export const addPostStart = () => {
  return {
    type: actionTypes.ADD_POST_START
  }
}

export const addPostSuccess = (id, postData) => {
  return {
    type: actionTypes.ADD_POST_SUCCESS,
    id: id,
    postdata: postData
  }
}

export const addPostFail = (error) => {
  return {
    type: actionTypes.ADD_POST_FAIL,
    error: error
  }
}

export const getPostsStart = () => {
  return {
    type: actionTypes.GET_POSTS_START
  }
}

export const getPostsSuccess = (posts) => {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    posts: posts
  }
}

export const getPostsFail = (error) => {
  return {
    type: actionTypes.GET_POSTS_FAIL,
    error: error
  }
}

//async

export const addPost = (postData) => {
  return dispatch => {
    dispatch(addPostStart());
    axios.post('/blog.json', postData)
    .then(response => {
      dispatch(addPostSuccess(response.data.title), postData)
    })
    .catch(error => {
      dispatch(addPostFail())
    })
  }
}

export const getPosts = () => {
  return dispatch => {
    dispatch(getPostsStart())
    axios.get('/blog.json')
    .then(res => {
      const fetchedPosts = [];
      for (let key in res.data) {
        fetchedPosts.push({
          ...res.data[key],
          id:key
        });
      }
      dispatch(getPostsSuccess(fetchedPosts))
    })
    .catch(err => {
      dispatch(getPostsFail(err))
    })
  }
}