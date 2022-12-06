import axios from "axios";

// actions
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER_ERROR = "GET_USER_ERROR";

// action creator
export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser,
    },
  };
}

export function showError() {
  return {
    type: GET_USER_ERROR,
    payload: {
      err: "ERROR!!!!!!!!",
    },
  };
}

export function getUsers() {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/5")
      .then((res) => dispatch(updateUser(res.data.name)))
      .catch((err) => dispatch(showError()));
  };
}
