import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import session from './session';

const reducers = combineReducers({
    form:formReducer,
    login:login,
    session:session,
});

export default reducers;