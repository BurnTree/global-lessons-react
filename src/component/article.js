import React, {Component} from 'react'
import CommentList from "./CommentList";
import PropTypes from 'prop-types'
import toogleOpen from "../decorator/toogleOpen";
import {TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import delet from "../AC/delet";
import {LoadComments} from "../AC/addCommentInArray";
import articles from "../reducer/articles";


class Article extends Component {

    state = {
        isOpen: false
    }

    componentWillReceiveProps({article}) {
        if(!article.comments.loaded && !article.comments.loading)this.props.LoadComments(article.id)
    }

    render() {
        const {article} = this.props;
        if(!article) return null
        const comments = this.state.isOpen ? <CommentList comments={article.comments} articleId={article.id} /> : null;
        return <div>
            <h1>{article.title}</h1>
            <h3> price: {article.price}</h3>
            <button onClick={this.handleDelete}>delete</button>
            <section>{article.description}</section>
            <button onClick={this.tOpen}>{this.state.isOpen ? 'close Comments' : 'open Comments'}</button>
            {comments}
            <h2>finally</h2>
        </div>
    }

    tOpen =() => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    handleDelete = () => {
        this.props.delet(this.props.article.idArticle)
    }

}

//ownProps не передаёт id
export default connect((state, ownProps) => ({article: state.infoArticles.entities.get(parseInt(ownProps.id))}), {delet, LoadComments})(Article);