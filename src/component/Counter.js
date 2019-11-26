import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import increment from "../AC/increment";

class Counter extends React.Component{
        static propTypes = {
            counter: PropTypes.number
        }

        render() {

            return <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>incr</button>
            </div>
        }

        handleIncrement = () => {
            this.props.increment()
        }

}


const decorator = connect((state)=>({
    counter : state.count
}), {increment})

export default decorator(Counter)