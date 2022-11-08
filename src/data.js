import axios from 'axios';

let images = [
  {
    id: 'id',
    url: 'url',
    description: 'alt',
  },
]; // todo get branded images

axios
  .get(
    'https://api.unsplash.com/search/photos/?client_id=c0c103ae0af5122685dec516d4275b6471e81c388d2ce0791c61bb8f47285d5d&query=flower&per_page=10'
  )
  .then(({ data }) => {
    images = data.results.map(
      (item) => ({
        id: item.id,
        url: item.urls.thumb,
        description:
          item.alt_description,
      })
    );
  });

const getImages = (count) =>
  images
    .slice(0, count)
    .concat(
      images
        .slice(0, count)
        .map((item) => ({
          ...item,
          id: `${item.id}-1`,
        }))
    )
    .sort(() => 0.5 - Math.random()); // todo shuffle

export default getImages;
