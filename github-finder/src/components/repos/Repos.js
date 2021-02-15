import PropTypes from "prop-types";
import React from "react";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
  return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
