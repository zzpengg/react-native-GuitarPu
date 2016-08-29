import {
  SET_LYRICS,
  ADD_TONE,
  REMOVE_TONE,
} from '../actions/SongActions';

export function song(state = {
  lyrics: '',
  tone: [],
}, action) {
  switch (action.type) {
    case SET_LYRICS:
      return Object.assign({}, state, {
        lyrics: action.lyrics,
      });
    case ADD_TONE:
      let res = Object.assign({}, state);
      res.tone[action.index] = action.tone;
      return res;
    case REMOVE_TONE:
      let res2 = Object.assign({}, state);
      res2.tone[action.index] = undefined;
      return res2;
    default:
      return state;
  }
}
