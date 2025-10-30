import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/authSlice";
import { homeApi } from "./slices/cms/homeSlice";
import { blogSlice } from "./slices/blogSlice";
import { conditionSlice } from "./slices/cms/conditionSlice";
import { contactSlice } from "./slices/contactSlice";
import { authApi } from "./auth/authApi";
import { bookingApi } from "./slices/cms/bookingApi";
import { cartApi } from "./slices/shop/cartApi";
import { productApi } from "./slices/shop/productApi";
import { packageApi } from "./slices/shop/packageApi";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user", "isLoggedIn"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),

  [homeApi.reducerPath]: homeApi.reducer,
  [blogSlice.reducerPath]: blogSlice.reducer,
  [conditionSlice.reducerPath]: conditionSlice.reducer,
  [contactSlice.reducerPath]: contactSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [bookingApi.reducerPath]: bookingApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [packageApi.reducerPath]: packageApi.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: [
      homeApi.reducerPath,
      blogSlice.reducerPath,
      conditionSlice.reducerPath,
      contactSlice.reducerPath,
      authApi.reducerPath,
      bookingApi.reducerPath,
      cartApi.reducerPath,
      productApi.reducerPath,
      packageApi.reducerPath,
    ],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(homeApi.middleware)
      .concat(blogSlice.middleware)
      .concat(conditionSlice.middleware)
      .concat(contactSlice.middleware)
      .concat(authApi.middleware)
      .concat(bookingApi.middleware)
      .concat(cartApi.middleware)
      .concat(productApi.middleware)
      .concat(packageApi.middleware),  
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
