import {
  GET_FOOTER_MENU,
  START,
  SUCCESS,
  FAIL,
} from '../actions/constants';

const defautState = {
  footerMenu: {},
};

export default (footerMenuState = defautState, action) => {
  const { type, response } = action;
  switch (type) {
    case GET_FOOTER_MENU + START:
      return {
        ...footerMenuState,
      };
    case GET_FOOTER_MENU + SUCCESS:
      return {
        ...footerMenuState,
        footerMenu: response,
      };
    case GET_FOOTER_MENU + FAIL:
      return {
        ...footerMenuState,
      };
    default:
      return footerMenuState;
  }
};
