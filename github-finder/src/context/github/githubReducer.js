import { CLEAR_USERS, GET_REPOS, GET_USERS, SEARCH_USERS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload.items,
        results: action.payload.total_count,
      };

    case CLEAR_USERS:
      return { ...state, users: [], results: null };
    case GET_USERS:
      return { ...state, user: action.payload };
    case GET_REPOS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
};
