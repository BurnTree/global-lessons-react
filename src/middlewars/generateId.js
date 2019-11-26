import {mapInArr} from "../helpers";

export default store => next => action => {
    const {comments} = store.getState()
    if(!action.generateId) return next(action)
    const mapArticles = Object.keys(mapInArr(comments.entities))
    const newId = findSimilar('0', mapArticles)
    next({
        ...action,
        randomId: newId
    })
}

function findSimilar(id, commentsKey) {
    const newId = Math.floor(Math.random() * Math.floor(100));
    if(commentsKey.includes(id))
        return findSimilar(newId.toString(),commentsKey)
    else
        return id
    return id
}