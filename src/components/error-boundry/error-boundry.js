import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';


export default class ErrorBoundry extends Component{
    state = {
        hasError: false
    }
    // error ve infonu inspect-de gormek olar
    // bir component-de ashibka olsa diger componentler calisacaq
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }
    render(){

        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return(
            this.props.children
        )
    }
}
