import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";

const ListImages = ({ images }) => {
  return (
    <div className="col-12 p-5 row">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

ListImages.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ListImages;
