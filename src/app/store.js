import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import productsReducer from "../features/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "../features/productsSlice";
// import * as thunk from "redux-thunk"; // Adjust as needed based on the import style

// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });
