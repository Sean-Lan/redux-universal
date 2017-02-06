import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as head from '../components/Head';
import * as body from '../components/Body';
import * as footer from '../components/Footer';

const rootReducer = combineReducers({head: head.reducer, body: body.reducer, footer: footer.reducer});

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer
  );
  return store;
};

export default configureStore;
