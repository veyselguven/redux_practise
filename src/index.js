/* eslint-disable default-case */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import thunk from "redux-thunk";

import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

// function reducer(state, action) {
//   console.log(action);
//   switch (action.type) {
//     case "CHANGE_STATE":
//       return action.payload.newState;
//   }
//   return "state";
// }
// ///////////////
// const action = {
//   type: "CHANGE_STATE",
//   payload: {
//     newState: "My New State",
//   },
// };
//////////
// const store = createStore(reducer);
// console.log("storeState=>", store.getState());

// store.subscribe(() => {
//   console.log("store updated");
// });
// store.dispatch(action);
// console.log("afterstoreState=>", store.getState());
//////////////////
/// store da herahngi bir degisiklik oldugunda bu degisiklikten haberdar olmak isterseniz
// subscribe methodunu kullanmak isteyebilirsiniz

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
});

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(
  rootReducer,
  {
    products: [
      {
        name: "Samsung",
        type: "TV",
      },
    ],
    user: "Veysel",
  },
  allEnhancers
);

// const updateUserAction = {
//   type: "UPDATE_USER",
//   payload: {
//     user: "Ahmet",
//   },
// };

// store.dispatch(updateUserAction);
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App count={4} />
    </React.StrictMode>
  </Provider>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
