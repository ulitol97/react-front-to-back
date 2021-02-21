import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  TECHS_ERROR
} from "../actions/types";

const initialState = {
  techs: null, // Array of techs from server
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
      };

    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };

    case TECHS_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
