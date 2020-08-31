import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from "react-loading"
import NewsList from "../../components/NewsList/";
import {getNews} from "../../AC";
import "./newsPage.sass";

export const NewsPage = ({searchQuery}) => {

    const dispatch = useDispatch();
    const {pageNumber} = useSelector(state => state.news)
    const totalCount = useSelector(state => state.news.totalEntities);
    const newsEntities = useSelector(state => state.news.entities);
    const error = useSelector(state => state.news.error);

    useEffect(() => {
        dispatch(getNews(searchQuery, pageNumber))
    }, [])

    const loadMoreNews = () => {
        if(newsEntities.get("loading")) return
        dispatch(getNews(searchQuery, pageNumber + 1))
    }

    return (
        <div className={"news-page"}>
            {totalCount === 0
                ? <h1 className={"no-results"}>No results found.</h1>
                : error
                    ? <p className={"message-box"}>{error}</p>
                    : newsEntities.get("pages").get(1) &&
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={loadMoreNews}
                            hasMore={Math.ceil(totalCount / 10) > pageNumber}
                            loader={
                                <div className={"news-list-loader-wrapper"}>
                                    <ReactLoading type={"spinningBubbles"} color={"black"} height={`100px`} width={`100px`}/>
                                </div>
                            }
                            style={{
                            height: "100%",
                            overflow: "visible",
                            }}
                        >
                            <NewsList newsPages={newsEntities.get("pages")}/>
                        </InfiniteScroll>
            }
        </div>
    );
}

