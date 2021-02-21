import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux"; // Bridges component with redux
import { searchLogs } from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  function onChange(e) {
    searchLogs(e.target.value);
  }

  return (
    <nav className="blue" style={{ marginBottom: "30px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search logs..."
              onChange={onChange}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
