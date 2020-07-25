import {LOGIN_REQUEST, SENT, FAILURE, SUCCESS, API_LOGIN_ROOT} from "../constants";
import {validatePassword, validateEmail} from "../helpers";

export const logIn = (email, password, callback) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST + SENT,
        });
        if(validatePassword(password) && validateEmail(email)) {
            fetch(API_LOGIN_ROOT, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({email: email, password: password})
            })
                .then(response => response.json())
                .then(response => {
                    if (response.status === "ok") {
                        dispatch({
                            type: LOGIN_REQUEST + SUCCESS,
                            payload: response.data
                        })
                        //callback()
                    } else dispatch({
                        type: LOGIN_REQUEST + FAILURE,
                        payload: response.message
                    })
                })
                .catch(error => dispatch({
                    type: LOGIN_REQUEST + FAILURE,
                    payload: error
                }))
        }else{
            dispatch({
                type: LOGIN_REQUEST + FAILURE,
                payload: "email must contain @ and password length must be more than 4 symbols"
            })
        }
    }
}