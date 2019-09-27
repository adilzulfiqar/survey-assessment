import axios from "axios";
import { ABC } from "./actions/types";

const initialState = {
  personalInformation: {
    invitedBy: "",
    fullName: "",
    email: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ABC:
      return {
        ...state,
        personalInformation: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
