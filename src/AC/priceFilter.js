import {PRICEFILTER} from "../constant";

export default function (priceFrom, priceTo) {
    return {
        type: PRICEFILTER,
        payload: {
            priceFrom,
            priceTo
        }
    }
}