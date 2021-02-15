import PropTypes from "prop-types";
import React, { useState } from "react";

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [query, setQuery] = useState("");

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      // Run query from the App component and clear form
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
      {showClear && (
        <button className="btn btn-white btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
