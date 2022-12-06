/* eslint-disable default-case */
import { GET_USER_ERROR, UPDATE_USER } from "../actions/user-action";
export default function userReducer(state = "", action) {
  console.log("actionUser=>", action);
  switch (action.type) {
    case UPDATE_USER:
      return action.payload.user;
    case GET_USER_ERROR:
      return action.payload.err;
    default:
      return state;
  }
}
