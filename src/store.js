import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger'

export const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if(process.env.NODE_ENV === 'production'){
    return applyMiddleware(myRouterMiddleware, thunk);
  } else {
    return applyMiddleware(myRouterMiddleware, thunk, createLogger());
  }
}

export const store = createStore(
  reducer,
  composeWithDevTools(getMiddleware()),
);
