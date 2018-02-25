import {createAction} from 'redux-actions'

export const SESSION_START = "session/SESSION_START";
export const SESSION_END = "session/SESSION_END";

export default{
    sessionStart : createAction(SESSION_START),
    sessionEnd : createAction(SESSION_END)
}
