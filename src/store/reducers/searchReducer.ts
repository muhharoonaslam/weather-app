import { SearchState, SearchAction, SET_SEARCH } from "../types";

const initialState: SearchState = {
  message: 'karachi',
  unit:'metric'
}

export default (state = initialState, action: SearchAction): SearchState => {
  switch(action.type) {
    case SET_SEARCH:
      return {
        message: action.payload.message,
        unit: action.payload.unit
      }
    default:
      return state;
  }
}