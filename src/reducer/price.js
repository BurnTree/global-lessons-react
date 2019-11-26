import {PRICEFILTER} from "../constant";

export default (price = {from: 0, to: 2000}, action) => {
    const {type, payload} = action

    switch(type){
        case PRICEFILTER: return {from: payload.priceFrom, to: payload.priceTo}
    }
    return price
}