import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux"; // Bridges component with redux
import { getLogs } from "../../actions/logActions";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs available.</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

// Pieces of the root reducer's state we want available as props
const mapStateToProps = (state) => ({
  log: state.log,
});

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

// Link component with redux store: connect(pieces of state we need, {actions we need})(Component)
// Pieces of state and actions are passed as props
export default connect(mapStateToProps, { getLogs })(Logs);
