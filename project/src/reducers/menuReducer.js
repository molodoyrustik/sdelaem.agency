import {
  GET_MENU,
  START,
  SUCCESS,
  FAIL,
} from '../actions/constants';

const defautState = {
  menu: {},
};

export default (menuState = defautState, action) => {
  const { type, response } = action;
  switch (type) {
    case GET_MENU + START:
      return {
        ...menuState,
      };
    case GET_MENU + SUCCESS:
      return {
        ...menuState,
        menu: response,
      };
    case GET_MENU + FAIL:
      return {
        ...menuState,
      };
    default:
      return menuState;
  }
};
