import React from "react";
import "./card.component.styles.css";

const Card = ({
  data: { name, login, followers, following, public_repos, avatar_url },
}) => (
  <div className="card-container">
    <img src={avatar_url} alt="user avatar image"></img>
    <header>Username {login}</header>
  </div>
);

export default Card;
