import React from 'react';
import {NewsCard} from "../NewsCard/NewsCard";
import PropTypes from "prop-types"
import "./newsList.sass";

export const NewsList = ({newsPages}) => {
    return(
        <div className="news-list">
            {newsPages.valueSeq().map((page, pageIndex) => {
                return page.map((news, newsIndex) => {
                    return (
                        <NewsCard
                            key={"" + pageIndex + newsIndex}
                            newsDate={news.publishedAt}
                            newsDescription={news.description}
                            srcLink={news.url}
                            title={news.title}
                            srcImg={news.urlToImage ? news.urlToImage : false}
                        />
                        )
                })
            })}
        </div>
    )
}

NewsList.propTypes = {
    newsPages: PropTypes.shape({
        optionalObject: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            loaded: PropTypes.bool.isRequired,
            news: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                publishedAt: PropTypes.string.isRequired,
                urlToImage: PropTypes.string
            }))
        })
    })
}