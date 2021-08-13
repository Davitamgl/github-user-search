import React, { useState, useEffect } from "react";


import { CircularProgress } from "@material-ui/core";
import Card from "./components/card/card.component";
import Navbar from "./components/navbar/navbar.component";
import Form from "./components/form/form.component";

import "./App.scss";

const App = () => {
  const [data, setData] = useState("");
  const [repos, setRepos] = useState("");
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("");

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const respData = await fetch(url);
      const respRepos = await fetch(`${url}/repos`);

      const dataJson = await respData.json();
      const repoJson = await respRepos.json();

      setData(dataJson);
      setRepos(repoJson.map((repo) => repo.name).slice(0, 3));

      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData("https://api.github.com/users/example");
  }, []);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(`https://api.github.com/users/${userInput}`);
  };

  return (
    <>
      {loading ? (
        <div>
          <CircularProgress style={{ marginLeft: "50vw", marginTop: "20vh" }} />
        </div>
      ) : (
        <div className="App">
          <Navbar />,
          <Form handleSearch={handleSearch} handleSubmit={handleSubmit} />
          <Card data={data} repos={repos} />
        </div>
      )}
    </>
  );
};
//<Card data={data} repos={repos} />
export default App;
