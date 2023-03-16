import axios from "axios";

// const
const dataInicial = {
  array: [],
  page: 1,
};
const GET_PROFILE_DATA = "GET_PROFILE_DATA";
// reducer
export default function profileReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_PROFILE_DATA:
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
export const getProfileAction = (param) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${param}`
    );
    dispatch({
      type: GET_PROFILE_DATA,
      payload: { array: res.data, page: 1 },
    });
  } catch (error) {
   dispatch({
      type: GET_PROFILE_DATA,
      payload: { array: 'no data', page: 1 },
    });
  }
};

