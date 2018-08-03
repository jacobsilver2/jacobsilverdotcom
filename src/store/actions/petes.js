// ALL ACTIONS GET EXPORTED FROM ONE FILE, ./index.js

//axios config file
import axios from 'axios';
//action types
import * as actionTypes from './actionTypes';
//URL constants
import { PETESURL } from './rootURLs';

export const getPetesShowsStart = () => {
  return {
    type: actionTypes.GET_PETES_EVENTS_START
  }
}

export const getPetesShowsSuccess = (shows) => {
  return {
    type: actionTypes.GET_PETES_EVENTS_SUCCESS,
    shows: shows
  }
}

export const getPetesShowsFail = (error) => {
  return {
    type: actionTypes.GET_PETES_EVENTS_FAIL,
    error: error
  }
}

// async actions
export const fetchPetesShows = () => {
  return dispatch => {
    dispatch(getPetesShowsStart());
    axios.get(PETESURL)
      .then(res => {
        const fetchedShows = [];
        // for (let key in res.data) {
        //   fetchedShows.push({
        //     ...res.data[key],
        //     id: key
        //   });
        // }
        res.data.map(show => {
          return fetchedShows.push({...show})
        })
      dispatch(getPetesShowsSuccess(fetchedShows))
      })
      .catch(err => {
        dispatch(getPetesShowsFail(err))
      })
  }
}
