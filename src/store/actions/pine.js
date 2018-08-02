// ALL ACTIONS GET EXPORTED FROM ONE FILE, ./index.js

//axios config file
import axios from 'axios';
//action types
import * as actionTypes from './actionTypes';
//URL constants
import { PINEBOXURL } from './rootURLs';

export const getPineShowsStart = () => {
  return {
    type: actionTypes.GET_PINE_EVENTS_START
  }
}

export const getPineShowsSuccess = (shows) => {
  return {
    type: actionTypes.GET_PINE_EVENTS_SUCCESS,
    shows: shows
  }
}

export const getPineShowsFail = (error) => {
  return {
    type: actionTypes.GET_PINE_EVENTS_FAIL,
    error: error
  }
}

// async actions
export const fetchPineShows = () => {
  return dispatch => {
    dispatch(getPineShowsStart());
    axios.get(PINEBOXURL)
      .then(res => {
        const fetchedShows = [];
        // for (let key in res.data) {
        //   fetchedShows.push({
        //     ...res.data[key],
        //     id: key
        //   });
        // }
        res.data.map(show => {
          fetchedShows.push({...show})
        })
      dispatch(getPineShowsSuccess(fetchedShows))
      })
      .catch(err => {
        dispatch(getPineShowsFail(err))
      })
  }
}
