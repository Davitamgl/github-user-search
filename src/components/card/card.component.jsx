import React from "react";
import { FiGithub } from "react-icons/fi";

import "./card.styles.scss";

const Card = ({
  repos,
  data: { login, followers, following, public_repos, avatar_url },
}) => {
  return (
    <div className="card-container">
      <div className="top-part"></div>
      <div className="image-container">
        <img alt="i" src={avatar_url}></img>
      </div>
      <div className="username-holder">
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noreferrer"
        >
          {login}
        </a>
      </div>
      <div className="followers-following">
        <span className="followers">Followers: {followers}</span>
        <span className="following">Following: {following} </span>
      </div>
      <div className="repository-quantity">
        <span>Repos: {public_repos}</span>
      </div>
      <div className="repo-container">
        {repos.map((repo) => {
          return (
            <a
            key={repo}
              className="repo-link"
              href={`https://github.com/${login}/${repo}`}
              target="_blank"
              rel="noreferrer"
            >
              <button  className="repo-list">
                <span className="github-icon-holder">
                  
                  <FiGithub className="github-icon" />
                </span>
                <span className="repos">{repo}</span>
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
};
//
//var result = repo.map( repoName => ({ text: repoName.name }));
export default Card;
//      {myArr.map((a) => {return <div>A</div>;})}
