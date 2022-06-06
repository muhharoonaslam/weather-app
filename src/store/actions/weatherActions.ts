import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER,GET_FORECAST, SET_LOADING, SET_ERROR } from '../types';

export const getWeather = (city: string,unit:string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}`);

      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData
      });
    }catch(err:any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      });
    }
  }
}
export function getWeather2(city: string) {
  return (dispatch: Dispatch<WeatherAction>) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        if(response.cod === '404' || response.cod === '400') {
          alert(response.message)
          return
        }
        dispatch({
          type: GET_WEATHER ,
          payload: response
        });
        // console.log(  '🚀 ~ file: styles.js ~ line 105 ~ return ~ response',  response,)
      })
      .catch((err: any) => {
        return dispatch({
          type: SET_ERROR,
          payload: err.message,
        })
      })
  }
}
export function forecastDaily(city: string,unit:string) {
  return (dispatch: Dispatch<WeatherAction>) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}`,
    )
      .then(res => res.json())
      .then(response => {
        if(response.cod === '404' || response.cod === '400') {
          alert(response.message)
          return
        }
        dispatch({
          type: GET_FORECAST ,
          payload: response
        });
        // console.log(  '🚀 ~ file: styles.js ~ line 105 ~ return ~ response',  response,)
      })
      .catch((err: any) => {
        return dispatch({
          type: SET_ERROR,
          payload: err.message,
        })
      })
  }
}


export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}