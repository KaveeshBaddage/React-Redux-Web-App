import {sessionTypes as types} from './../actions' 
import {handleActions} from 'redux-actions'

console.log("localstorage value is ",localStorage)

const defaultState = {
    isAuthenticated: !!localStorage.token,
    jwt:localStorage.token
}

export default handleActions({
    [types.SESSION_START]:(state,{})=> (
        {isAuthenticated: !!localStorage.token, jwt:localStorage.token}
    ),
    [types.SESSION_END]: (state,{}) => (
        {isAuthenticated: !!localStorage.token, jwt:undefined}
    )
},defaultState);