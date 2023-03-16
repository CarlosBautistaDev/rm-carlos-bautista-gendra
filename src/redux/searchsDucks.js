import axios from "axios";

// const
const dataInicial = {
  array: [],
  page: 1,
};
const GET_SEARCH_DATA = "GET_SEARCH_DATA";
const GET_SEARCH_NEXT_SUCCESS = "GET_SEARCH_NEXT_SUCCESS";
const GET_SEARCH_PREV_SUCCESS = "GET_SEARCH_PREV_SUCCESS";
// reducer
export default function searchReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_SEARCH_DATA:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    case GET_SEARCH_NEXT_SUCCESS:
      return {
        ...state,
        array: action.payload.array,
        page: action.payload.page,
      };
    case GET_SEARCH_PREV_SUCCESS:
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
export const getSearchAction = (param) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${param}`
    );
    dispatch({
      type: GET_SEARCH_DATA,
      payload: { array: res.data.results, page: 1 },
    });
  } catch (error) {
   dispatch({
      type: GET_SEARCH_DATA,
      payload: { array: 'no data', page: 1 },
    });
  }
};
export const nextSearchsAction = (search) => async (dispatch, getState) => {
  const { page } = getState().search;
  const next = page + 1;
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${next}&name=${search}`
    );
    dispatch({
      type: GET_SEARCH_NEXT_SUCCESS,
      payload: { array: res.data.results, page: next },
    });
  } catch (error) {
   dispatch({
      type: GET_SEARCH_NEXT_SUCCESS,
      payload: { array: 'no data', page: page },
    });
  }
};
export const prevSearchsAction = (search) => async (dispatch, getState) => {
  const { page } = getState().search;
  const prev = page - 1;

  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${prev}&name=${search}`
    );
    if (prev < 1) {
    } else {
      dispatch({
        type: GET_SEARCH_PREV_SUCCESS,
        payload: { array: res.data.results, page: prev },
      });
    }
  } catch (error) {
   dispatch({
      type: GET_SEARCH_PREV_SUCCESS,
      payload: { array: 'no data', page: prev },
    });  }
};
