import React from 'react';
import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  setOpenImage,
  webformatURL = '',
  largeImageURL = '',
}) => {
  return (
    <li
      onClick={() => setOpenImage(largeImageURL)}
      className={s.ImageGalleryItem}
    >
      <img
        src={webformatURL ? webformatURL : ''}
        alt=""
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  setOpenImage: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
