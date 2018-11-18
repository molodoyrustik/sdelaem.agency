import {
  GET_POSTS,
  SUCCESS,
  START,
  FAIL,
} from '../actions/constants';

const defautState = {
};

export default (postsState = defautState, action) => {
  const { type, response, payload } = action;

  switch (type) {
    case GET_POSTS + START:
      return {
        ...postsState,
      };
    case GET_POSTS + SUCCESS:
      return {
        ...postsState,
        items: [...response],
      };
    case GET_POSTS + FAIL:
      return {
        ...postsState,
      };
    default:
      return postsState;
  }
};
