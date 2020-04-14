import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ListImages from "./components/ListImages";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAPI = async () => {
      if (search === "") return;

      const imagesPerPage = 30;
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;

      const response = await fetch(url);
      const result = await response.json();

      setImages(result.hits);
      setTotalPages(Math.ceil(result.totalHits / imagesPerPage));

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    fetchAPI();
  }, [search, actualPage]);

  const previousPage = () => {
    const newActualPage = actualPage - 1;

    if (newActualPage === 0) return;

    setActualPage(newActualPage);
  };
  const nextPage = () => {
    const newActualPage = actualPage + 1;

    if (newActualPage > totalPages) return;

    setActualPage(newActualPage);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image search engine</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImages images={images} />
        {actualPage === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={previousPage}
          >
            &laquo; Previous
          </button>
        )}

        {actualPage === totalPages ? null : (
          <button type="button" className="btn btn-info" onClick={nextPage}>
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
