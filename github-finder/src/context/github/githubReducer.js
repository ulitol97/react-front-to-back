import {
  CLEAR_ERROR,
  CLEAR_REPOS,
  CLEAR_USER,
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS,
  SEARCH_USERS
} from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload.items,
        results: action.payload.total_count,
      };

    case CLEAR_USERS:
      return { ...state, users: [], results: null };
    case CLEAR_USER:
      return { ...state, user: {} };
    case CLEAR_REPOS:
      return { ...state, repos: [] };
    case GET_USERS:
      return { ...state, user: action.payload };
    case GET_REPOS:
      return { ...state, repos: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default reducer;
