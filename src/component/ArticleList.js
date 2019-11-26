import React from 'react'
import Article from "./article";
import {connect} from "react-redux";
import {article} from "../info";
import {filterArticleSelector} from "../selecters";
import loadAllArticles from "../AC/articles";
import {LoadComments} from "../AC/addCommentInArray";
import Loaded from "./Loaded";
import {NavLink} from "react-router-dom";

class ArticleList extends React.Component {
    state = {
        idCommentOpen: null
    }

    render() {
        const {loading, loaded} = this.props
        if (loading) return <Loaded/>
        const artList = this.props.articles.map(element => <li key={element.id}>
            {/*<Article article={element}*/}
            {/*         isOpen={this.state.idCommentOpen === element.id}*/}
            {/*         tOpen={this.tOpen.bind(this, element.id)}/>*/}
                     <NavLink to={'/articles/'+element.id}>{element.title}</NavLink>
        </li>)
        return <div>
            <ul>{artList}</ul>
        </div>
    }

    tOpen = (id) => {
        this.setState({
            idCommentOpen: (this.state.idCommentOpen !== id) ? id : null
        })
        if(!this.props.entity.get(id).comments.loaded)
        this.props.LoadComments(id)
    }

    componentDidMount() {
        const {loading, loaded} = this.props
        if (!loading && !loaded) this.props.loadAllArticles()
    }
}


export default connect((state) => {
    return {
        articles: filterArticleSelector(state),
        loading: state.infoArticles.loading,
        loaded: state.infoArticles.loaded,
        entity: state.infoArticles.entities
    }
}, {loadAllArticles, LoadComments})(ArticleList);