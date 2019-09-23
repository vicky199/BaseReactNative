import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './modules/LoginPage/reducer'
const AppReducers = combineReducers({
   loginReducer

});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;