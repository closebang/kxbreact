import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers/rootReducer";
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger'

export const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if(process.env.NODE_ENV === 'production'){
    return applyMiddleware(myRouterMiddleware);
  } else {
    return applyMiddleware(myRouterMiddleware, createLogger());
  }
}

export const store = createStore(
  reducer,
  composeWithDevTools(getMiddleware()),
);
