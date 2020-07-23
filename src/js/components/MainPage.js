import React from 'react';
import {Link} from "react-router-dom";

export const MainPage = () => {

    return(
        <div className="main-page">
            <div className="main-page__welcome-block">
                <p className="main-page__welcome-block__text">
                    Welcome to the <a href={"https://github.com/StaRenn"}>StaRen's</a> news searching service
                </p>
                <Link className={"main-page__welcome-block__get-started"} to={"/news"}>Get Started</Link>
            </div>
        </div>
    )

}