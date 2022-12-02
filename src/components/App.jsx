import { Component } from 'react';

import { getPictures } from 'services/api';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    serchQuery: '',
    isLoading: false,
    page: 1,
    images: [],
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.serchQuery !== this.state.serchQuery
    ) {
      this.loadPictures();
    }
  }

  searchPictures = async (serchQuery, page) => {
    this.setState({ isLoading: true });

    const resp = await getPictures(serchQuery, page);

    this.setState({ isLoading: false });
    return resp;
  };

  loadPictures = async () => {
    const page = this.state.page;
    const images = await this.searchPictures(this.state.serchQuery, page);
    const newImages = this.state.images.concat(images);
    this.setState({ images: newImages });
  };

  onSubmit = async e => {
    e.preventDefault();

    const serchQuery = e.currentTarget.elements.searchFormInput.value;

    this.setState({ serchQuery, page: 1, images: [] });
  };

  onIncrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {!!images.length && <Button loadMore={this.onIncrementPage} />}
      </div>
    );
  }
}
