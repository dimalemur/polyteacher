import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducer';
import { gradesPageReducer } from './reducers/gradesPageReducer';

const reducers = combineReducers({
  user: userReducer,
  gradesPage: gradesPageReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
