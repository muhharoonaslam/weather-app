import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import weatherReducer from './reducers/weatherReducer';
import forecastReducer from './reducers/forecastReducer';
import searchReducer from './reducers/searchReducer';
const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
  forecast: forecastReducer,
  weather: weatherReducer,
  search: searchReducer
});

const store = createStore(
  
  rootReducer,
  middleware,
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;