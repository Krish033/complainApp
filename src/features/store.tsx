import { configureStore } from "@reduxjs/toolkit";
import { api } from "./slice/api";
import userReducer from "./slice/users";
import navigationReducer from "./slice/navigations";

// Create the Redux store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Add the API slice reducer,
    auth: userReducer,
    navigation: navigationReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),

  devTools: true,
});
export default store;
