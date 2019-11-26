import {DELETE} from "../constant";

export default function (id) {
    return {
        type: DELETE,
        payload: {
            id
        }
    }
}