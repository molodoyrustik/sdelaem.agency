import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pagesReducer from './pagesReducer';
import postsReducer from './postsReducer';
import menuReducer from './menuReducer';
import footerMenuReducer from './footerMenuReducer';
import socialReducer from './socialReducer';

export default combineReducers({
  router: routerReducer,
  pages: pagesReducer,
  posts: postsReducer,
  menu: menuReducer,
  social: socialReducer,
  footerMenu: footerMenuReducer,
});
