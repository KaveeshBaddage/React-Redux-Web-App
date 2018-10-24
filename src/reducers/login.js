import {loginTypes as types} from './../actions';
import {handleActions} from 'redux-actions';

const initialState = {
	username: '',
	hasError: false,
	error: null,
	resp: { status: 0, message: "" },
	loading: false,
	loggedin: false
}

// Reducers from redux-actions
export default handleActions({
	[types.LOGIN_QUERY_START]: (state, { payload }) => (
        { ...state, loading: true, error: false, requestSuccess: false }
    ),
    [types.LOGIN_QUERY_END]: (state, { payload }) => (
        { ...state, loading: false }
    ),
	[types.LOGIN]: (state, { payload }) => (
		{ ...state, username: payload.username, hasError: false, error: {}, loading: true }
	),

	[types.FIELD_CHANGED]: (state, { payload: { k, v } }) => (
		{ ...state, [k]: v }
	),

	[types.LOGIN_FAILED]: (state, { payload }) => (
		{ ...state, username: "", hasError: true, resp: { status: 0 }, error: payload, loading: false }
	),

	[types.LOGIN_SUCCESS]: (state, { payload }) => (
		{ ...state, username: "", hasError: false, resp: payload, error: null, loading: false, loggedin: true }
	),

	[types.LOGIN_CLEAR]: (state, action) => (
		{ ...state, username: "", hasError: false, resp: {}, loggedin: false,error:null }
    ),
    
    [types.LOGOUT]: (state, { payload }) => (
		{ ...state, username: "", hasError: false, resp: {}, error: null, loading: false, loggedin:false }
	)

}, initialState)
