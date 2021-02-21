import {
  ADD_LOG,
  CLEAR_CURRENT,
  DELETE_LOG,
  GET_LOGS,
  LOGS_ERROR,
  SEARCH_LOGS,
  SET_CURRENT,
  SET_LOADING,
  UPDATE_LOG
} from "../actions/types";

const initialState = {
  logs: null, // Array of logs from server
  current: null, // Selected log
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
      };

    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        current: null,
      };

    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };

    case LOGS_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
