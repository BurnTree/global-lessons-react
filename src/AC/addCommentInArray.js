import {ADDCOMMENT, FAIL, LOAD_COMMENTS, START, SUCCESS} from "../constant";

export function addCommentInArray(descriptionComment, articleId) {
    return{
        type: ADDCOMMENT,
        payload: {
            comment: descriptionComment,
            articleId: articleId
        },
        generateId: true
    }
}

export function LoadComments(id){
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: {id}
        })
        setTimeout(()=>{
            fetch('http://localhost:8080/comments?articleId='+id)
                .then(res => res.json())
                .then(response => dispatch({type: LOAD_COMMENTS + SUCCESS, payload: {id, response}}))
                .catch(error => dispatch({type: LOAD_COMMENTS + FAIL, payload: {id, error}}))
        }, 1000)
    }
}

