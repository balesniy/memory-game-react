import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import getImages from './data.js';

import App from './app';

(async () => {
  await new Promise((r) =>
    setTimeout(r, 1000)
  );
  const images = getImages(6); // todo static image set
  const rootElement =
    document.getElementById('root');
  const root = ReactDOM.createRoot(
    rootElement
  );
  root.render(<App images={images} />);
})();
