import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;

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
      setAlert({ msg: "Enter a valid query", type: "light" });
      return false;
    }
    setAlert(null);
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

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
