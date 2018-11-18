import axios from 'axios';

import {
  GET_PAGES,
  GET_POSTS,
  GET_MENU,
  GET_SOCIAL,
  GET_FOOTER_MENU,
  START, SUCCESS, FAIL,
} from './constants';

export function getPages() {
  const apiUrl = 'http://sdelaem.dev.bradius.ru/wp-json/acf/v3/pages?per_page=100500';

  return (dispatch) => {
    dispatch({
      type: GET_PAGES + START,
      payload: {},
    });

    return (axios.get(apiUrl)
      .then((response) => {
        dispatch({
          type: GET_PAGES + SUCCESS,
          payload: {},
          response: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_PAGES + FAIL,
          payload: { error },
        });
      })
    );
  };
}

export function getPosts() {
  const apiUrl = 'http://sdelaem.dev.bradius.ru/wp-json/acf/v3/posts?per_page=100500';

  return (dispatch) => {
    dispatch({
      type: GET_POSTS + START,
      payload: {},
    });

    return (axios.get(apiUrl)
      .then((response) => {
        dispatch({
          type: GET_POSTS + SUCCESS,
          payload: {},
          response: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_POSTS + FAIL,
          payload: { error },
        });
      })
    );
  };
}

export function getMenu() {
  const apiUrl = 'http://sdelaem.dev.bradius.ru/wp-json/menus/v1/menus/mainMenu/';

  return (dispatch) => {
    dispatch({
      type: GET_MENU + START,
      payload: {},
    });

    return (axios.get(apiUrl)
      .then((response) => {
        dispatch({
          type: GET_MENU + SUCCESS,
          payload: {},
          response: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_MENU + FAIL,
          payload: { error },
        });
      })
    );
  };
}

export function getFooterMenu() {
  const apiUrl = 'http://sdelaem.dev.bradius.ru/wp-json/menus/v1/menus/footerMenu/';

  return (dispatch) => {
    dispatch({
      type: GET_FOOTER_MENU + START,
      payload: {},
    });

    return (axios.get(apiUrl)
      .then((response) => {
        dispatch({
          type: GET_FOOTER_MENU + SUCCESS,
          payload: {},
          response: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_FOOTER_MENU + FAIL,
          payload: { error },
        });
      })
    );
  };
}

export function getSocial() {
  const apiUrl = 'http://sdelaem.dev.bradius.ru/wp-json/acf/v3/posts/129';

  return (dispatch) => {
    dispatch({
      type: GET_SOCIAL + START,
      payload: {},
    });

    return (axios.get(apiUrl)
      .then((response) => {
        dispatch({
          type: GET_SOCIAL + SUCCESS,
          payload: {},
          response: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_SOCIAL + FAIL,
          payload: { error },
        });
      })
    );
  };
}