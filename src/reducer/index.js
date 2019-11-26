import {combineReducers} from "redux";
import counter from "./counter";
import articles from "./articles";
import price from "./price";
import comments from "./comments";
import infoArticles from "./infoArticles";

export  default combineReducers({
    count: counter,
    articles, price, comments, infoArticles
})