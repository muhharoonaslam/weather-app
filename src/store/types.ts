export const GET_WEATHER = 'GET_WEATHER';
export const GET_FORECAST = 'GET_FORECAST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_SEARCH = 'SET_SEARCH';


export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface ForecastData {
  city:    City;
  cod:     string;
  message: number;
  cnt:     number;
  list:    List[];
}

export interface City {
  id:         number;
  name:       string;
  coord:      Coord;
  country:    string;
  population: number;
  timezone:   number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface List {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  temp:       Temp;
  feels_like: FeelsLike;
  pressure:   number;
  humidity:   number;
  weather:    Weather[];
  speed:      number;
  deg:        number;
  gust:       number;
  clouds:     number;
  pop:        number;
  rain?:      number;
}

export interface FeelsLike {
  day:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Temp {
  day:   number;
  min:   number;
  max:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}



export interface IlistWeather {
       id:number,
       main:string,
       description:string,
       icon:string
}
export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}


export interface ForcastState {
  data: ForecastData | null;
  loading: boolean;
  error: string;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}


interface GetForcastAction {
  type: typeof GET_FORECAST;
  payload: ForecastData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction = GetWeatherAction |  GetForcastAction | SetLoadingAction | SetErrorAction;

export interface SearchAction {
  type: typeof SET_SEARCH;
  payload: {
    message:string,
    unit:string
  };
}

export interface SearchState {
  message: string;
  unit: string
}