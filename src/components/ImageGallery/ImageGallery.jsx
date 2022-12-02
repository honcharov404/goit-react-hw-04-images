import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';

const ImageGallery = ({ images = [] }) => {
  const [imageToOpen, setImageToOpen] = useState('');

  const setOpenImage = largeImageURL => {
    setImageToOpen(largeImageURL);
  };

  const removeImageToOpen = () => {
    setImageToOpen('');
  };

  // const { images } = this.props;
  console.log(images);
  return (
    <>
      {imageToOpen && (
        <Modal removeImageToOpen={removeImageToOpen}>
          <img src={imageToOpen} alt="" />
        </Modal>
      )}
      {!!images.length ? (
        <ul className={s.ImageGallery}>
          {images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                largeImageURL={image.largeImageURL}
                webformatURL={image.webformatURL}
                setOpenImage={setOpenImage}
              />
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
