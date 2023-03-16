import axios from "axios";

// const
const dataInicial = {
  array: [],
  page: 1,
};
const GET_START_DATA = "GET_START_DATA";
const GET_CHARS_NEXT_SUCCESS = "GET_CHARS_NEXT_SUCCESS";
const GET_CHARS_PREV_SUCCESS = "GET_CHARS_PREV_SUCCESS";
// reducer
export default function charactersReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_START_DATA:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    case GET_CHARS_NEXT_SUCCESS:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    case GET_CHARS_PREV_SUCCESS:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    default:
      return state;
  }
}
// actions
export const getCharactersAction = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://rickandmortyapi.com/api/character?page=1"
    );
    dispatch({
      type: GET_START_DATA,
      payload: { array: res.data.results, page: 1 },
    });
  } catch (error) {
  }
};
export const nextCharactersAction = () => async (dispatch, getState) => {
  const { page } = getState().characters;
  const next = page + 1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${next}`
    );
    dispatch({
      type: GET_CHARS_NEXT_SUCCESS,
      payload: { array: res.data.results, page: next },
    });
  } catch (error) {
  }
};
export const prevCharactersAction = () => async (dispatch, getState) => {
  const { page } = getState().characters;
  const prev = page - 1;

  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${prev}`
    );
    if (prev < 1) {
    } else {
      dispatch({
        type: GET_CHARS_PREV_SUCCESS,
        payload: { array: res.data.results, page: prev },
      });
    }
  } catch (error) {
  }
};
