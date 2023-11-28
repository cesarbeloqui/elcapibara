import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer  } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";

import rootReducer from "../reducer/index.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["mode"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
