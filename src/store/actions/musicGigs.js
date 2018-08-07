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
    showData: showdata
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

export const removeShow = (showId) => {
  return {
    type: actionTypes.REMOVE_SHOW,
    showId: showId
  }
}

export const updateShow = (id, show) => {
  return {
    type: actionTypes.EDIT_SHOW,
    show: show,
    showId: id
  }
}

//! ────────────────────────────────────────────────────────────────── I ──────────
//!   :::::: A S Y N C   A C T I O N S : :  :   :    :     :        :          :
//! ────────────────────────────────────────────────────────────────────────────

export const addShow = (showdata) => {
  return dispatch => {
    dispatch(addShowStart());
    axios.post('/shows.json', showdata)
    .then(response => {
      dispatch(addShowSuccess(response.data.name, showdata))
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

export const deleteShow = (showId) => {
  return dispatch => {
    axios.delete(`/shows/${showId}.json`)
    .then(res => {
      dispatch(removeShow(showId))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const editShow = (id, showData) => {
  return dispatch => {
    axios.patch(`/shows/${id}.json`, showData)
    .then(res => {
      dispatch(updateShow(id, showData));
    })
    .catch(error => {
      console.log(error)
    })
  }
}
