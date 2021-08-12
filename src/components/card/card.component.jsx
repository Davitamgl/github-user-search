import React from "react";
import "./card.styles.css";

const Card = ({
  repos,
  data: { login, followers, following, public_repos, avatar_url },
}) => {
  console.log(repos);
  return (
    <div className="card-container">
      <div className="top-part"></div>
      <div className="mid-part">
        <img src={avatar_url}></img>
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
      <div className="bottom-part">
        <span className="followers">Followers: {followers}</span>
        <span className="following">Following: {following} </span>
      </div>
      <div className="repos">
        <span>Repos: {public_repos}</span>
      </div>
      <div className="bottom"></div>
    </div>
  );
};
//
//var result = repo.map( repoName => ({ text: repoName.name }));
export default Card;
//      {myArr.map((a) => {return <div>A</div>;})}
