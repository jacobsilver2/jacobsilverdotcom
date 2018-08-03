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

export const getShowsStart = () => {
  return {
    type: actionTypes.GET_SHOWS_START
  }
}

export const getShowsSuccess = (shows) => {
  return {
    type: actionTypes.GET_SHOWS_SUCCESS,
    shows: shows
  }
}

export const getShowsFail = (error) => {
  return {
    type: actionTypes.GET_SHOWS_FAIL,
    error: error
  }
}


//async actions
export const addShow = (showdata) => {
  return dispatch => {
    dispatch(addShowStart())
    axios.post('/shows.json', showdata)
    .then(response => {
      dispatch(addShowSuccess(response.data.act, showdata))
    })
    .catch(error => {
      dispatch(addShowFail(error))
    })
  }
}

export const getShows = () => {
  return dispatch => {
    dispatch(getShowsStart());
    axios.get('/shows.json')
    .then(res => {
      const fetchedShows = [];
      for (let key in res.data) {
        fetchedShows.push({
          ...res.data[key],
          id: key
        });
      }
      dispatch(getShowsSuccess(fetchedShows))
    })
    .catch(err => {
      dispatch(getShowsFail(err))
    })
  }
}
