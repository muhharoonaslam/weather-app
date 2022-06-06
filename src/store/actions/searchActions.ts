import { SET_SEARCH, SearchAction } from '../types';

export const setSearch = (message: string,unit:string): SearchAction => {
  return {
    type: SET_SEARCH,
    payload: {message:message,unit:unit}
  }
}