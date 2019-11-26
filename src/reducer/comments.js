import {comments as info} from "../info"
import {ADDCOMMENT, LOAD_ALL_ARTICLES, LOAD_COMMENTS, START, SUCCESS} from "../constant";
import {OrderedMap, Record} from "immutable";
import {arrInMap, mapInArr} from "../helpers";

const commentInfo = Record({
    id: undefined,
    description: '',
    article: undefined
})

const CommentsState = Record({
    entities: new OrderedMap({})
})

const DefaultComments = new CommentsState

export default (comments = DefaultComments, action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case ADDCOMMENT:
            // const newComments = Record({
            //     id: randomId,
            //     description: payload.comment,
            //     article: payload.articleId
            // })
            return comments.setIn(['entities',randomId],
                new commentInfo({id: randomId, description: payload.comment, article: payload.articleId}))
        case LOAD_COMMENTS + SUCCESS:
            return comments
            .update('entities', existCom => existCom.merge(arrInMap(payload.response, commentInfo)))
        default: return comments
    }
}
