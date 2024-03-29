import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default function() {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Edmond Ma Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Edmond Ma Portfolio'} />
      </Helmet>
      <App />
    </>
  );
};
