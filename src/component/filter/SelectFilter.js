import React from 'react'
import Select from "react-select";
import {connect} from "react-redux";
import addFilter from "../../AC/addFilter";
import articles from "../../reducer/articles";
import {mapInArr} from  "../../helpers"


class SelectFilter extends React.Component{
    state = {}
    render() {
        const {selected, arts} = this.props;
        const mapArticles = mapInArr(arts.entities)
        const options = mapArticles.map(article => (
            {
            label: article.title,
            value: article.id
        }))
        //
        return <div>
            <Select options={options} isMulti={true} onChange={this.changeArticle}/>
            <h3>{selected}</h3>
        </div>
    }

    changeArticle = selection => {
        this.props.addFilter(selection.map(sel => sel.value));
    }
}

export default connect(state => ({selected: state.articles, arts: state.infoArticles}), {addFilter})(SelectFilter)

