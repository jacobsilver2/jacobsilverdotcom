//constants
import * as actionTypes from '../actions/actionTypes';
//utility
import { updateObject } from '../../shared/utility';

const initialState = {
  shows: [],
  error: false,
}

const addShowSuccess = (state, action) => {
  const newShow = updateObject(action.showData, {id: action.showId})
  return updateObject(state, {
    loading: false,
    shows: state.shows.concat(newShow)
  })
}

const removeShow = (state, action) => {

}

const editShow = (state, action) => {

}


const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SHOW_START: return updateObject(state, {loading:true});
    case actionTypes.ADD_SHOW_SUCCESS: return addShowSuccess(state, action);
    case actionTypes.ADD_SHOW_FAIL: return updateObject(state, {loading:false});

    case actionTypes.REMOVE_SHOW: return removeShow(state, action);

    case actionTypes.GET_SHOWS_START: return updateObject(state, {loading: true});
    case actionTypes.GET_SHOWS_SUCCESS: return updateObject(state, {shows: action.shows, loading: false});
    case actionTypes.GET_SHOWS_FAIL: return updateObject(state, {loading: false});
    case actionTypes.EDIT_SHOW: return editShow(state, action);
    default: return state;
  }
}

export default reducer;

