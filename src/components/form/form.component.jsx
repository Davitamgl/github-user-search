import React  from "react";


import "./form.styles.css";

const Form = ({handleSearch, handleSubmit}) => {



return(
  <div>
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