import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {logIn} from "../AC";
import {Redirect} from "react-router-dom";

export const LoginPage = () => {

    const error = useSelector(state => state.user.error);
    const authorized = useSelector(state => state.user.authorized)
    const isPending = useSelector(state => state.user.loading)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(authorized)

    const handleLogInChange = (ev) => {
        setEmail(ev.target.value);
    }

    const handlePasswordChange = (ev) => {
        setPassword(ev.target.value);
    }

    const handleLogInButton = () => {
        dispatch(logIn(email, password));
    }

    if(authorized) {
        localStorage.setItem("authorized", "true");
        localStorage.setItem("userId", user.userData.userId)
        return <Redirect to={"/"} />
    }

    return(
        <div className="login-page">
            <div className={`login-page__frame ${isPending ? "pending" : ""}`}>
                <h1 className={"sign-in-h1"}>Sign In</h1>
                <input
                    onChange={handleLogInChange}
                    value={email}
                    className={`login-input ${error && "error"}`}
                    type={"email"}
                    placeholder={"Email"}
                />
                <input
                    onChange={handlePasswordChange}
                    value={password}
                    className={`password-input ${error && "error"}`}
                    type={"password"}
                    placeholder={"Password"}
                />
                <button onClick={handleLogInButton} className={`sign-in-button`}>Log In</button>
                <p className={"message-box"}>{error ? error.replace(/_/g, " ") : ""}</p>
            </div>
        </div>
    )
}