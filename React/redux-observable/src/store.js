import 'rxjs';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import rootReducer from './reducers/index';

const logger = createLogger();

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );


  return store;
}
