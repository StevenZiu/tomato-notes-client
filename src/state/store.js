import { createStore, compose, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { rootReducer } from "./rootReducer"

export const configStore = () => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    rootReducer,
    {},
    composeEnhancer(applyMiddleware(thunkMiddleware))
  )
}
