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
    postData: postData
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

export const removePost = (postId) => {
  return {
    type: 'REMOVE_POST',
    postId: postId
  }
}

export const updatePost = (id, post) => {
  return {
    type: actionTypes.EDIT_POST,
    post: post,
    postId: id
  }
}

//! ────────────────────────────────────────────────────────────────── I ──────────
//!   :::::: A S Y N C   A C T I O N S : :  :   :    :     :        :          :
//! ────────────────────────────────────────────────────────────────────────────


export const addPost = (postData) => {
  return dispatch => {
    dispatch(addPostStart());
    axios.post('/blog.json', postData)
    .then(response => {
      dispatch(addPostSuccess(response.data.name, postData))
    })
    .catch(error => {
      dispatch(addPostFail(error))
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

export const deletePost = (postId) => {
  return dispatch => {
    axios.delete(`/blog/${postId}.json`)
    .then(res => {
      dispatch(removePost(postId))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const editPost = (id, postData) => {
  return dispatch => {
    axios.patch(`/blog/${id}.json`, postData)
    .then(res => {
      dispatch(updatePost(id, postData));
    })
    .catch(error => {
      console.log(error)
    })
  }
}