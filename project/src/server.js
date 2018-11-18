import express  from 'express';
import path from 'path';

import React    from 'react';
import ReactDOMServer from 'react-dom/server'

import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import manifest from '../build/manifest.json';

import routes from './routes';
// Добавляем инициализацию redux в серверную часть приложения
import { Provider } from 'react-redux';
import configureStore from './store';
import { getPages, getPosts, getMenu, getFooterMenu, getSocial } from './actions';

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const staticDir = process.env.NODE_ENV === 'production' ? '../build' : '../public';
app.use(express.static(path.join(__dirname, staticDir)));

app.use((req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true});
  } else {
    next();
  }
});

app.use((req, res) => {
  const branch = matchRoutes(routes, req.url);
  const store = configureStore({}, 'server');
  store.dispatch(getPages())
    .then(() => (store.dispatch(getPosts())))
    .then(() => (store.dispatch(getMenu())))
    .then(() => (store.dispatch(getFooterMenu())))
    .then(() => (store.dispatch(getSocial())))
    .then(() => {
      let context = {};
      const componentHTML = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      );
      if (context.status === 404) {
        res.status(404);
      }
      if (context.status === 302) {
        return res.redirect(302, context.url);
      }
      
      return res.end(renderHTML(componentHTML, store.getState(), Helmet.renderStatic()));
    })
});

const cssPath = process.env.NODE_ENV === 'production' ? `/${manifest['main.css']}` : 'http://localhost:8050/styles.css';
const jsPath = process.env.NODE_ENV === 'production' ? `/${manifest['main.js']}` : 'http://localhost:8050/bundle.js';

function renderHTML(componentHTML, initialState = {}, helmet) {
  return `
  <!DOCTYPE html>
<html>
<head itemscope>
   ${helmet.title.toString()}
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${helmet.meta.toString()}
  <title>Hello React</title>
  <link rel="stylesheet" href="${cssPath}">
  <script type="application/javascript">window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)};</script>
</head>
<body>
  <div id="root">${componentHTML}</div>
  ${ process.env.NODE_ENV === 'production' ? '': '<div id="dev-tools"></div>'}
  <script type='application/javascript' src="${jsPath}"></script>
</body>
</html>

  `;
}

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
