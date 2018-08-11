//constants
import * as actionTypes from '../actions/actionTypes';
//utility
import { updateObject } from '../../shared/utility';

const initialState = {
  videos: [],
  error: false,
}


const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_YOUTUBE_PLAYLIST_START: return updateObject(state, {loading: true} );
    case actionTypes.GET_YOUTUBE_PLAYLIST_SUCCESS: return updateObject(state, {videos: action.videos, loading: false });
    case actionTypes.GET_YOUTUBE_PLAYLIST_FAIL: return updateObject(state, {loading:false});
    default: return state
  }
}

export default reducer;