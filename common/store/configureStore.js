import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as head from '../components/Head';
import * as body from '../components/Body';
import * as footer from '../components/Footer';

const rootReducer = combineReducers({head: head.reducer, body: body.reducer, footer: footer.reducer});
const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
