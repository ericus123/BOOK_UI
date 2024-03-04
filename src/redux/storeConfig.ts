import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import persistedReducer from "./persistConfig";

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    (process.env.NODE_ENV === "development" &&
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            "persist/FLUSH",
            "persist/REHYDRATE",
            "persist/PAUSE",
            "persist/PERSIST",
            "persist/PURGE",
            "persist/REGISTER"
          ]
        }
      }).concat(logger)) ||
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/FLUSH",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PERSIST",
          "persist/PURGE",
          "persist/REGISTER"
        ]
      }
    })
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
