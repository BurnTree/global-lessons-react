import React from 'react'
import Article from "./article";
import Comment from "./Comment";
import AddComment from "./AddComment";
import Loaded from "./Loaded";

class CommentList extends React.Component {

    render() {
        const {comments, articleId} = this.props;
        if (comments.loading) return <Loaded/>
        const listComm = comments.list.map(id => <li key={id}><Comment id={id}/></li>)
        return <ul>
            {listComm}
            <AddComment articleId ={articleId}/>
        </ul>
    }
}

export default CommentList