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


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user", "isLoggedIn"],
};


// Combine persisted and non-persisted reducers
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  [homeApi.reducerPath]: homeApi.reducer,
});


const persistedReducer = persistReducer(
  { key: "root", storage, blacklist: [] },
  rootReducer
);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(homeApi.middleware),
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
