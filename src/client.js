/* eslint-disable react/jsx-filename-extension  */
import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { loadableReady } from '@loadable/component';
import { hydrate } from 'react-dom';
import { ClientApp } from './app/containers/App';
import routes from './app/routes';
import { template, templateStyles } from '#lib/joinUsTemplate';
import loggerNode from '#lib/logger.node';

const logger = loggerNode();

const dataBlock = document.getElementById('simorgh-data');
const data = dataBlock ? JSON.parse(dataBlock.textContent) : {};
const root = document.getElementById('root');

// Only hydrate the client if we're on the expected path
// When on an unknown route, the SSR would be discarded and the user would only
// see a blank screen. Avoid this by only hydrating when the embedded page data
// and window location agree what the path is. Otherwise, fallback to the SSR.
if (data.path === window.location.pathname) {
  loadableReady(() => {
    const cache = createCache({ key: 'bbc' });

    hydrate(
      <CacheProvider value={cache}>
        <ClientApp data={data} routes={routes} />
      </CacheProvider>,
      root,
    );
  });
} else {
  logger.warn(`
    Simorgh refused to hydrate.
    It attempted to hydrate page with path ${data.path},
    but window.location says path is ${window.location.pathname}
  `);
}

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log(template, ...templateStyles);
}

if (module.hot) {
  module.hot.accept();
}
