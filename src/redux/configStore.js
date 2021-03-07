import {combineReducers, createStore} from 'redux';
import {GameOanTuXiReducer} from './reducers/GameOanTuXiReducer';
const  rootReducer = combineReducers({
    GameOanTuXiReducer
});
export const store = createStore(rootReducer);