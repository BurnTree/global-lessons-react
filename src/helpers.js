import {Map, OrderedMap} from "immutable";

export function arrInMap(array, DataRecord = OrderedMap) {
    return array.reduce((acc,item)=>acc.set(item.id, new DataRecord(item)), new Map({}))
}

export function mapInArr(obj) {
    return obj.valueSeq().toArray()
}