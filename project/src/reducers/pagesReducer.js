import {
  GET_PAGES,
  START,
  SUCCESS,
  FAIL,
} from '../actions/constants';

const defautState = {
};

export default (pagesState = defautState, action) => {
  const { type, response } = action;

  switch (type) {
    case GET_PAGES + START:
      return {
        ...pagesState,
      };
    case GET_PAGES + SUCCESS:
      return {
        ...pagesState,
        items: [...response],
      };
    case GET_PAGES + FAIL:
      return {
        ...pagesState,
      };
    default:
      return pagesState;
  }
};
