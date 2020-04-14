import React, { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      if (search === "") return;

      const imagesPerPage = 30;
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&per_page=${imagesPerPage}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
    };
    fetchAPI();
  }, [search]);
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image search engine</p>
        <Form setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;
