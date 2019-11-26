import React from 'react'
import {connect} from "react-redux";
import priceFilter from "../../AC/priceFilter";

class PriceFilter extends React.Component {

    state = {
        fromValue: 0,
        toValue: 2000
    }

    render() {
        return <div>
            chose the gap price
            <input type="text" value={this.state.fromValue} onChange={this.changeFromInput}/>
            - <input type="text" value={this.state.toValue} onChange={this.changeToInput}/>
            <button onClick={this.usePriceFilter(this.state.fromValue, this.state.toValue)}>Apply</button>
        </div>
    }

    changeFromInput = ev => {
        this.setState({
            fromValue: ev.target.value
        })
    }

    changeToInput = ev => {
        this.setState({
            toValue: ev.target.value
        })
    }

    usePriceFilter(from, to) {
        this.props.priceFilter(from, to)
    }
}

export default connect(null, {priceFilter})(PriceFilter)