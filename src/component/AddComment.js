import React from 'react'
import {connect} from "react-redux";
import {addCommentInArray} from "../AC/addCommentInArray";


class AddComment extends React.Component {
    state ={
        commentDescription: ''
    }

    render() {
        const {articleId} = this.props
        return <form>
                <input type="text" name="firstName" onChange={this.changeInput}/>
                <button onClick={this.createNewComments.bind(this)}>Create</button>
        </form>
    }

    createNewComments(ev){
        ev.preventDefault();
        this.props.addCommentInArray(this.state.commentDescription, this.props.articleId)
    }

    changeInput = ev => {
        this.setState({
            commentDescription: ev.target.value
        })
    }

}

export default connect(null,{addCommentInArray})(AddComment)