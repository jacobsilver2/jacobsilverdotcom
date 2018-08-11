import axios from '../../axios-youTube';
import * as actionTypes from './actionTypes';
import { ID } from './yt-playlistId';

export const getPlaylistStart = () => {
  return {
    type: actionTypes.GET_YOUTUBE_PLAYLIST_START
  }
}

export const getPlaylistSuccess = (videos) => {
  return {
    type: actionTypes.GET_YOUTUBE_PLAYLIST_SUCCESS,
    videos: videos
  }
}

export const getPlaylistFail = (error) => {
  return {
    type: actionTypes.GET_YOUTUBE_PLAYLIST_FAIL,
    error: error
  }
}




//! ────────────────────────────────────────────────────────────────── I ──────────
//!   :::::: A S Y N C   A C T I O N S : :  :   :    :     :        :          :
//! ────────────────────────────────────────────────────────────────────────────

export const getPlaylist = () => {
  return dispatch => {
    dispatch(getPlaylistStart());
    axios.get(`/playlistItems?part=snippet&maxResults=50&playlistId=${ID}&key=${process.env.REACT_APP_YOUTUBE_API}`)
    .then(res => {
      console.log(res)
      const fetchedPlaylists = [];
      for (let key in res.data.items) {
        fetchedPlaylists.push({
          ...res.data.items[key],
          id: key
        });
      }
      dispatch(getPlaylistSuccess(fetchedPlaylists))
    })
    .catch(err => {
      dispatch(getPlaylistFail(err))
    })
  }
}
