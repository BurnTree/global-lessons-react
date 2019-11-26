import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import {article} from "../src/info"
import store from "./store";
import Root from "./component/Root";

const info = article;

ReactDOM.render(<Root/>, document.getElementById('root'));

