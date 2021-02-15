import { useReducer } from "react";
import useFetch from "use-http";
import { CLEAR_USERS, GET_REPOS, GET_USERS, SEARCH_USERS } from "../types";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

// Initial state and related actions
const GithubState = (props) => {
  const apiUrl = "https://api.github.com";
  const apiCredentialsString = `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  const usernamePlaceholder = "[USER_NAME_PLACEHOLDER]";

  const usersSearchEndpoint = `search/users${apiCredentialsString}`;
  const usersProfileEndpoint = `users/${usernamePlaceholder}${apiCredentialsString}`;
  const usersReposEndpoint = `users/${usernamePlaceholder}/repos${apiCredentialsString}&sort=created:asc`;

  const { get, response, loading, error } = useFetch(apiUrl);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    results: null,
    loading,
    error,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users: load GitHub users by username search
  async function searchUsers(query) {
    const fetchedUsers = await get(`${usersSearchEndpoint}&q=${query}`);
    if (response.ok) {
      dispatch({
        type: SEARCH_USERS,
        payload: {
          items: fetchedUsers.items,
          results: fetchedUsers.total_count,
        },
      });
    }
  }

  // Get user: load GitHub specific user by username
  async function getUser(username) {
    const fetchedUser = await get(
      `${usersProfileEndpoint.replace(usernamePlaceholder, username)}`
    );
    if (response.ok) {
      dispatch({
        type: GET_USERS,
        payload: fetchedUser,
      });
    }
  }

  // Get repos: load user's repos by username
  async function getUserRepos(username) {
    const fetchedRepos = await get(
      `${usersReposEndpoint.replace(usernamePlaceholder, username)}`
    );
    if (response.ok) {
      dispatch({
        type: GET_REPOS,
        payload: fetchedRepos,
      });
    }
  }

  // Clear users: clear users from state
  function clearUsers() {
    dispatch({
      type: CLEAR_USERS,
    });
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
