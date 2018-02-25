import { createLogic } from 'redux-logic';
import { loginTypes } from './../actions';
import { loginActions } from './../actions';
import { sessionActions } from './../actions';
import * as API from './httpClient';
import * as endPoints from './endpoints';

const login =  createLogic({
    type: loginTypes.LOGIN, // only apply this logic to this type "login/LOGIN"
    latest: true,  // only take latest data
    debounce: 1000,// Wait 1 s before triggering another call
   
    process({ MockHTTPClient, getState, action }, dispatch, done) {
        if (action.payload.username = 'asd' && action.payload.password == '123') {
            localStorage.setItem('token',"token123")
            dispatch(loginActions.loginSuccess("token123"))
            dispatch(sessionActions.sessionStart())
            console.log("login service is calling")
        } else {
            dispatch(loginActions.loginFailed({ title: "Error!", message: "Invalid username or password." }))
        }
        done();
        return

        let HTTPClient
        if (MockHTTPClient) {
            HTTPClient = MockHTTPClient
        } else {
            HTTPClient = API
        }

        HTTPClient.Post(endPoints.LOGIN, action.payload)
            //.then(response => response.data)
            .then(response => {
                dispatch({
                    type: loginTypes.LOGIN_SUCCESS,
                    payload: response.data
                })
            // .then(data => dispatch)({
            //     type: loginTypes.LOGIN_SUCCESS,
            //     payload: response.data
             })
            .catch(err => {
                var errorMessage = "Invalid username or password.";

                console.error(err); // log since could be render err
                if (err && err.code == "ECONNABORTED") {
                    errorMessage = "Please check your internet connection.";
                }

                dispatch(loginActions.loginFailed({ title: "Error!", message: errorMessage }))
            })
            .then(() => done()); // call done when finished dispatching

    }
});

const logout =  createLogic({
    type: loginTypes.LOGOUT, 
    process({},dispatch, done){
        console.log("calling logout service")
        localStorage.removeItem('token')
        dispatch(sessionActions.sessionEnd())
        done();
    }
});

export default [
    login,
    logout
];