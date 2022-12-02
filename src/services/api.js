import axios from 'axios';

const KEY = '31088798-33c99e8eaf6238e9b90f1afa9';

export const getPictures = async (serchQuery, page) => {
  return await axios
    .get(
      `https://pixabay.com/api/?q=${serchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => {
      return data.hits.map(hit => ({
        id: hit.id,
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
      }));
    })
    .catch(error => {
      console.log(error);
    });
};
