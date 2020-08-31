import {FAILURE, GET_NEWS_REQUEST, REQUESTED_NEW_SEARCH_QUERY, SENT, SUCCESS} from "../constants";
import {Record, OrderedMap, Map} from "immutable";

const defaultState = Record({
    totalEntities: null,
    pageNumber: 1,
    entities: Map({
        pages: OrderedMap({}),
        loading: false,
        loaded: false,
    }),
    error: null
})();

export default (newsState = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REQUESTED_NEW_SEARCH_QUERY: {
            return(defaultState)
        }
        case GET_NEWS_REQUEST + SENT: {
            return newsState.set("pageNumber", payload)
                .setIn(["entities", "loading"], true)
                .setIn(["entities", "loaded"], false)
        }
        case GET_NEWS_REQUEST + SUCCESS: {
            return newsState.set("totalEntities", payload.totalResults)
                .setIn(["entities", "loaded"], true)
                .setIn(["entities", "loading"], false)
                .updateIn(["entities", "pages"], pages => pages.set(newsState.pageNumber, payload.articles))
        }
        case GET_NEWS_REQUEST + FAILURE: {
            return newsState.set("error", payload)
        }
    }

    return newsState
}