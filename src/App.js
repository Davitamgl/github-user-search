import React, { useState, useEffect } from "react";
import Card from "./components/card/card.component";

import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getData(`https://api.github.com/users/example`);
  }, []);

  const getData = (url) => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(`https://api.github.com/users/${userInput}`);
  };

  return (
    <div className="App">
      <div className="navbar">
        <header>Github Search</header>
      </div>
      <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Github username"
            onChange={handleSearch}
          />

          <button>Search</button>
        </form>
      </div>
      <Card data={data} />
    </div>
  );
}

export default App;
