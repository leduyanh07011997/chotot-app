import * as types from '../types';

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: types.FETCH_DATA_REQUEST });

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: types.FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.FETCH_DATA_ERROR, payload: error });
  }
};
