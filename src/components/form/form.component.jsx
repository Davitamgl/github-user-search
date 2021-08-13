import React  from "react";


import "./form.styles.scss";

const Form = ({handleSearch, handleSubmit}) => {



return(
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
);
}
export default Form