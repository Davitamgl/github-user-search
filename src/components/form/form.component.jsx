import React from "react";

import "./form.styles.scss";

const Form = ({ handleSearch, handleSubmit, userExists }) => {
  return (
    <div>
      <div className="form-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Github username"
            onChange={handleSearch}
          />
          <button>Search</button>
        </form>
      </div>

      <span >
        {userExists ? <span></span> : <div className="user-exists">User not found</div>}
      </span>
    </div>
  );
};
export default Form;
