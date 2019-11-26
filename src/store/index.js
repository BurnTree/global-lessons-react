import {createStore, applyMiddleware} from "redux";
import logger from "../middlewars/logger";
import generateId from "../middlewars/generateId";
import api from "../middlewars/api"
import reducer from '../reducer'
import thunk from "redux-thunk";

const enhached = applyMiddleware(thunk, logger, api, generateId)

const store = createStore(reducer, {}, enhached)

window.store = store
export default store