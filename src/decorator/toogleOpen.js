import React, {Component} from 'react'

export default (CompWithPopup) => class WrapperComponentForPopup extends Component{

    state = {
        isOpen: false
    }

    render() {
        return <CompWithPopup {...this.props} tOpen={this.tOpen} {...this.state}/>
    }
}