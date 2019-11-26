import {article} from "../info"
import {SELECT, ADDCOMMENT} from "../constant";

export default (information  =  [], action) => {
    const {type, payload} = action

    switch(type){
        // case DELETE : return information.filter(article => article.idArticle !== payload.id);
        // case PRICEFILTER: {
        //     return information.filter(article => (article.price >= payload.priceFrom && article.price <= payload.priceTo))
        // }
        case SELECT: return payload.changeArticle
        default: return information
    }
}