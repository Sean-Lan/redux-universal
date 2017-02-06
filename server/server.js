/* eslint-disable no-console, no-use-before-define */

import 'babel-polyfill';
import 'isomorphic-fetch';

import path from 'path';
import Express from 'express';
import qs from 'qs';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '../common/store/configureStore';
import App from '../common/components/App';

const app = new Express();
const port = 3000;

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// randomly pick a color
app.get('/api/color', (req, res) => {
  const params = qs.parse(req.query);
  const part = params.part ? params.part : 'head';
  let delay = 2000;
  const colors = ['pink', 'lightblue', 'gray', 'red', 'aquamarine',
    'dodgerblue', 'cyan'];
  const colorIndex = getRandomInt(0, colors.length);
  const color = colors[colorIndex];
  if (part === 'body') {
    delay = 5000;
  } else if (part === 'footer') {
    delay = 6000;
  }
  setTimeout(()=> {
    res.send(JSON.stringify({color}));
  }, delay);
});


app.get('/', (req, res) => {
  handleRender(req, res);
});

function handleRender(req, res) {
  // Query our mock API asynchronously
  const p1 = fetch('http://localhost:3000/api/color?part=head').then(res => res.json());
  const p2 = fetch('http://localhost:3000/api/color?part=body').then(res => res.json());
  const p3 = fetch('http://localhost:3000/api/color?part=footer').then(res => res.json());
  Promise.all([p1, p2, p3]).then(([head, body, footer]) => {
    // Compile an initial state
    const preloadedState = {
      head: { color: head.color},
      body: { color: body.color},
      footer: { color: footer.color}
    };

    // Create a new Redux store instance
    const store = configureStore(preloadedState);

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
  });
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
