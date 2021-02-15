import PropTypes from "prop-types";
import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

const User = (props) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, repos, getUserRepos, loading, error } = githubContext;
  const { match } = props;
  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  // On mount, make App fetch the user info
  useEffect(() => {
    const username = match.params.login;
    getUser(username);
    getUserRepos(username);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return `Error: ${error}`;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-circle-left" /> Back to search
        </Link>
        Hireable:{" "}
        {hireable == null ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        {/* Card */}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt={`Avatar of ${login} (${name})`}
              style={{ width: "150px" }}
            ></img>
            <h2>{name}</h2>
            <p>{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-dark my-1"
            >
              See on GitHub
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: {login}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: {company}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>
                      Website: <a href={blog}>{blog}</a>
                    </strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public repos: {public_repos}</div>
          <div className="badge badge-dark">Public gists: {public_gists}</div>
        </div>
        {repos.length > 0 && (
          <Fragment>
            <hr />
            <h3>
              {repos.length}{" "}
              {`public ${repos.length === 1 ? "repository" : "repositories"}`}
            </h3>
            <Repos repos={repos} />
          </Fragment>
        )}
      </Fragment>
    );
  }
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default User;
