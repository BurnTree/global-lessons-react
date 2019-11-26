import {LOAD_ALL_ARTICLES} from "../constant";

export default function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callApi: 'articles'
    }
}