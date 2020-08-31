import React from 'react';
import PropTypes from "prop-types";
import "./newsCard.sass";

export const NewsCard = ({title, srcImg, newsDescription, srcLink, newsDate}) => {
    console.log(srcImg)
    return(
        <div className="news-card">
            <a href={srcLink} className={"news-card__title"}>{title}</a>
            {srcImg && <img src={srcImg} className={"news-card__img"}/>}
            <p className={"news-card__description"}>{newsDescription ? newsDescription : ""}</p>
            <h3 className={"news-card__date"}>
                {(new Date(newsDate)).toDateString()}
            </h3>
        </div>
    )
}

NewsCard.propTypes = {
    title: PropTypes.string.isRequired,
    srcImg: PropTypes.string,
    newsDescription: PropTypes.string,
    srcLink: PropTypes.string.isRequired,
    newsDate: PropTypes.string.isRequired,
}

