import {setMarker, next, vote, INITIAL_STATE} from './core';
import * as actionTypes from './actionTypes';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.MARKER_SET:
      return setMarker(state, action.marker);
  }
  return state;
}
