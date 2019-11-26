import React from 'react'
import ArticleList from "../ArticleList";
import {Route} from 'react-router-dom'
import Article from '../article'

export default class Articles extends React.Component {
    render() {
        return <div>
            <ArticleList/>
            <Route path='/articles/:id' render={this.getArticle}/>
        </div>
    }

    getArticle = ({match}) => {
        const {id} = match.params
        return <Article id={id} key={id}/>
    }

}

