import PropTypes from "prop-types";
import React from "react";

function RepoItem({ repo }) {
  const { name, html_url } = repo;

  return (
    <div className="card">
      <h3>
        <a href={html_url} target="_blank" rel="noreferrer noopener" alt={`Repo ${name} on GitHub`}>
          {name}
        </a>
      </h3>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
