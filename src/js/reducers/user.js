import {Record} from "immutable";
import {FAILURE, LOGIN_REQUEST, SENT, SUCCESS} from "../constants";

const UserState = Record({
    loading: false,
    loaded: false,
    authorized: false,
    userData: {},
    error: null,
});

const defaultState = UserState();

export default (userState = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOGIN_REQUEST + SENT: {
            return userState.set("loading", true)
                .set("error", null)
        }
        case LOGIN_REQUEST + SUCCESS: {
            return userState.set("authorized", true)
                .set("loading", false)
                .set("loaded", true)
                .setIn(["userData", "userId"], payload.id)
        }
        case LOGIN_REQUEST + FAILURE: {
            return userState.set("loading", false)
                .set("error", payload)
        }
    }

    console.log(userState)
    return userState
}