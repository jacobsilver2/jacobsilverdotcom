import axios from '../../axios-musicGigs';
import * as actionTypes from './actionTypes';

export const addShowStart = () => {
  return {
    type: actionTypes.ADD_SHOW_START
  }
}

export const addShowSuccess = (id, showdata) => {
  return {
    type: actionTypes.ADD_SHOW_SUCCESS,
    id: id,
    showdata: showdata
  }
}

export const addShowFail = (error) => {
  return {
    type: actionTypes.ADD_SHOW_FAIL,
    error: error
  }
}

//async actions
export const addShow = (showdata) => {
  return dispatch => {
    dispatch(addShowStart())
    axios.post('/shows.json', showdata)
    .then(response => {
      console.log(response)
      dispatch(addShowSuccess(response.data.act, showdata))
    })
    .catch(error => {
      dispatch(addShowFail(error))
    })
  }
}

// axios.post('/shows.json', show)
// .then(res => console.log(res))
// .catch(err => console.log(err))