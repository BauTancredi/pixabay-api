import React, { useState } from "react";
import PropTypes from "prop-types";

import Error from "./Error";

const Form = ({ setSearch }) => {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (word.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearch(word);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an image"
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            placeholder="Search"
          />
        </div>
      </div>
      {error ? <Error message="Search field is mandatory." /> : null}
    </form>
  );
};

Form.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Form;
