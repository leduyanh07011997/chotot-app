import * as types from '../types';

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true,
        error: null,
      };
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: true,
      };
    default:
      return state;
  }
};
