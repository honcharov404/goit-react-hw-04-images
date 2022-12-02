import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    imageToOpen: '',
  };

  static defaultProps = {
    images: [],
  };

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  setOpenImage = largeImageURL => {
    this.setState({ imageToOpen: largeImageURL });
  };

  removeImageToOpen = () => {
    this.setState({ imageToOpen: '' });
  };

  render() {
    const { imageToOpen } = this.state;
    const { images } = this.props;

    return (
      <>
        {imageToOpen && (
          <Modal removeImageToOpen={this.removeImageToOpen}>
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
                  setOpenImage={this.setOpenImage}
                />
              );
            })}
          </ul>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default ImageGallery;
