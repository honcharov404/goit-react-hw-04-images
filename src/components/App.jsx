import React, { useCallback, useEffect, useState } from 'react';

import { getPictures } from 'services/api';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  const [serchQuery, setSerchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const searchPictures = useCallback(async () => {
    setIsLoading(true);

    const resp = await getPictures(serchQuery, page);

    setIsLoading(false);
    return resp;
  }, [page, serchQuery]);

  const loadPictures = useCallback(async () => {
    const loadedImages = await searchPictures(serchQuery, page);
    setImages(prevState => prevState.concat(loadedImages));
  }, [page, searchPictures, serchQuery]);

  useEffect(() => {
    if (serchQuery !== '') {
      loadPictures();
    }
  }, [loadPictures, page, serchQuery]);

  const onSubmit = async e => {
    e.preventDefault();

    const request = e.currentTarget.elements.searchFormInput.value;

    setSerchQuery(request);
    setPage(1);
    setImages([]);
  };

  const onIncrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {!!images.length && <Button loadMore={onIncrementPage} />}
    </div>
  );
};
