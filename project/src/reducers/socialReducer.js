import {
  GET_SOCIAL,
  START,
  SUCCESS,
  FAIL,
} from '../actions/constants';

const defautState = {
  social: {},
};

export default (socialState = defautState, action) => {
  const { type, response } = action;
  switch (type) {
    case GET_SOCIAL + START:
      return {
        ...socialState,
      };
    case GET_SOCIAL + SUCCESS:
      return {
        ...socialState,
        social: response,
      };
    case GET_SOCIAL + FAIL:
      return {
        ...socialState,
      };
    default:
      return socialState;
  }
};
