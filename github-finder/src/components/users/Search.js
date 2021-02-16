import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert, removeAlert } = alertContext;

  const [query, setQuery] = useState("");

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      // Run query and clear form
      searchUsers(query);
      setQuery("");
    }
  };

  function validateInputs() {
    if (!query.trim()) {
      setAlert("Enter a valid query", "light");
      return false;
    }
    removeAlert();
    return true;
  }

  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        {/* <label htmlFor="user-query">Search users:</label> */}
        <input
          id="user-query"
          type="text"
          name="query"
          placeholder="Search users..."
          value={query}
          onChange={onQueryChange}
          autoFocus
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn btn-block btn-dark"
        ></input>
      </form>
      {users.length > 0 && (
        <button className="btn btn-white btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
