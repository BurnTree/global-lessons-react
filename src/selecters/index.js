import {createSelector} from 'reselect'
import infoArticles from "../reducer/infoArticles";

const articlesSelector = state => state.articles
const priceSelector = state => state.price
const articlesMapGetter = state => state.infoArticles.entities

const commentsGetter = state => state.comments.entities
const idGetter = (state, props) => props.id

export const filterArticleSelector = (createSelector(articlesSelector, priceSelector, articlesMapGetter, (articles, price, articlesMap) => {
        const {from, to} = price;
        const selectedArticles = articles.map(id => articlesMap.get(id))
        return selectedArticles.filter(art => (art.price >= from && art.price <= to))
    }
))

export const commentsSelectorFactory = () => (createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments.get(id)
}))
