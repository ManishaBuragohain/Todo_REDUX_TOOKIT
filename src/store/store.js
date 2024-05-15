import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import todoReducer from "./Slice";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
  reducer: {
    todo: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
