import React from 'react';
import '../App.css';
import Counter from "./Counter";
import PriceFilter from "./filter/PriceFilter";
import SelectFilter from "./filter/SelectFilter";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import Articles from "./routeHandlers/Articles";

class App extends React.Component {
    state = {
        isValid: true,
        selection: null,
        inputValue: ''
    }

    render() {
        const alert = !this.state.isValid ? <p> Not valid</p> : ''

        return <Router>
            {/*<Counter/>*/}
            <div>
                <h2>Menu</h2>
                <div><NavLink activeStyle={{color: "red"}} to='/counter'>Count</NavLink></div>
                <div><NavLink to='/sFilter'>Select</NavLink></div>
                <div><NavLink to='/pFilter'>Price</NavLink></div>
                <div><NavLink to='/articles'>Articles</NavLink></div>
            </div>
            <Route path="/counter" component={Counter}/>
            <Route path="/sFilter" component={SelectFilter}/>
            <Route path="/pFilter" component={PriceFilter}/>
            <Route path="/articles" component={Articles}/>

        </Router>
    }

    changeInput = ev => {
        this.setState({
            inputValue: ev.target.value,
            isValid: ((this.state.inputValue.length > 10) || (this.state.inputValue.length < 4)) ? false : true
        })
    }

    changeSelection = selection => this.setState(selection)
}

export default App;
