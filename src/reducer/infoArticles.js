import {article} from "../info"
import {ADDCOMMENT, LOAD_ALL_ARTICLES, SUCCESS, START, LOAD_COMMENTS} from "../constant";
import {Map, OrderedMap, Record} from 'immutable'
import {arrInMap, mapInArr} from "../helpers";

const articleRecord = Record({
    id: undefined,
    title: '',
    description: '',
    price: undefined,
    comments: {
        loading: false,
        loaded: false,
        list: []
    }
})

const ReducerState = Record({
    loaded: false,
    loading: false,
    entities: new OrderedMap({})
})

const DefaultArticle = new ReducerState

export default (articles = DefaultArticle, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case LOAD_COMMENTS + START:
            return articles.setIn(['entities', payload.id, 'comments', 'loading'], true)
        case LOAD_COMMENTS + SUCCESS:
            return articles.setIn(['entities', payload.id, 'comments', 'list']
                , payload.response.map(comment => comment.id))
                .setIn(['entities', payload.id, 'comments', 'loading'], false)
                .setIn(['entities', payload.id, 'comments', 'loaded'], true)
        case ADDCOMMENT:
            return articles.updateIn(['entities', payload.articleId, 'comments', 'list'], comments => comments.concat(randomId))
        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true)
        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('entities', arrInMap(response, articleRecord))
                .set('loading', false)
                .set('loaded', true)
        default:
            return articles
    }
    return articles
}
