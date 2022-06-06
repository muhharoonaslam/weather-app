import { ForcastState, WeatherAction, GET_WEATHER, SET_LOADING, SET_ERROR, GET_FORECAST } from "../types";

const initialState: ForcastState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: WeatherAction): ForcastState => {
  switch(action.type) {
    case GET_FORECAST:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}