import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ListImages from "./components/ListImages";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      if (search === "") return;

      const imagesPerPage = 30;
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&per_page=${imagesPerPage}`;
      const response = await fetch(url);
      const result = await response.json();
      setImages(result.hits);
    };
    fetchAPI();
  }, [search]);
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image search engine</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImages images={images} />
      </div>
    </div>
  );
}

export default App;
