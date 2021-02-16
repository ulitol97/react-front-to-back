import { REMOVE_ALERT, SET_ALERT } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        type: action.payload.type || state.type,
      };
    case REMOVE_ALERT:
      return {
        msg: null,
        type: null,
      };
    default:
      return state;
  }
};

export default reducer;
