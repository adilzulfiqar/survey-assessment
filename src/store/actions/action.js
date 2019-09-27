import { ABC } from "./types";

export const abc = e => dispatch => {
  dispatch({
    type: ABC,
    payload: e,
  });
};
