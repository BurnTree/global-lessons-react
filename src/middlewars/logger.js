export default store => next => action => {
    console.log('---', 'dispatch', action)
    // const mapArticles = Object.keys(store.getState().comments)
    // const newId = findSimilar('0', mapArticles)
    // if (action.type === ADDCOMMENT) action.payload =
    // {
    //     idComment: newId,
    //     comment: action.payload.comment,
    //     articleId: action.payload.articleId
    // }
     next(action)
}

function findSimilar(id, commentsKey) {
    const newId = Math.floor(Math.random() * Math.floor(100));
    if(commentsKey.includes(id))
        return findSimilar(newId.toString(),commentsKey)
    else
        return id
    return id
}