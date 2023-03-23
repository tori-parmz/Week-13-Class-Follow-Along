import React from 'react';

export default class NewCar extends React.Component{
    render(){
        let make = this.props.make;
        let model = this.props.model || 'undefined';
        let year = this.props.year || '0000';
        return(<h1>Hello, I am a {year} {make} {model}</h1>)
    }
}