import React from 'react'
import {connect} from 'react-redux'
import {commentsSelectorFactory} from "../selecters";


function Comment({comments}) {
    return <div>
        <p>{comments.description}</p>
    </div>
}

const mapStateToProps = () => {
    const commentsSelector = commentsSelectorFactory()

    return (state, ownProps) => {
        return {comments: commentsSelector(state, ownProps)}
    }
}

export default connect(mapStateToProps, null)(Comment)