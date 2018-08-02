//!constants
import * as actionTypes from '../actions/actionTypes';
//!utility
import { updateObject } from '../../shared/utility';

const initialState = {
  events: [],
  error: false,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PETES_EVENTS_START: return updateObject(state, {loading: true})
    case actionTypes.GET_PETES_EVENTS_SUCCESS: return updateObject(state, {events: action.shows, loading: false})
    case actionTypes.GET_PETES_EVENTS_FAIL: return updateObject(state, {loading: false})
    default: return state;
  }
}

export default reducer;