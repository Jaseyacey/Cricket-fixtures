import {createStore, combineReducers} from 'redux';
import userReducer from '../src/Components/Redux/Reducers/index';

const rootReducer = combineReducers({
  userProfile: userReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
