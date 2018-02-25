import { createAction } from 'redux-actions'

// Types
export const LOGIN = "login/LOGIN";
export const LOGIN_FAILED = "login/LOGIN_FAILED"
export const LOGIN_SUCCESS = "login/LOGIN_SUCCESS"

export const LOGIN_CLEAR = "login/CLEAR_LOGIN"
export const FIELD_CHANGED = "login/FIELD_CHANGED"
export const LOGOUT = "login/LOGOUT"



export default {
  doLogin: createAction(LOGIN),

  doCancel: createAction(LOGIN_CLEAR),

  fieldChanged: createAction(FIELD_CHANGED,
    (k, v) => ({ k, v })
    /*{
      type: FIELD_CHANGED,
      payload: {k: "key", v: "val"}
    }*/
  ),

  loginSuccess: createAction(LOGIN_SUCCESS),
  loginFailed: createAction(LOGIN_FAILED),
  logout:createAction(LOGOUT),
  
}