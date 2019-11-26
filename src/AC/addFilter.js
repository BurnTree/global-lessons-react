import {SELECT} from "../constant";

export default function (changeArcticle) {
    return {
        type: SELECT,
        payload: {
            changeArticle: changeArcticle
        }
    }
}