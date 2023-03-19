import React from 'react';

class Car extends React.Component{
    constructor()
    {
        super();//inheritance
        //state
        this.state = {};

        //props
        this.props = {make: '', model: '', color: ''}
    }
    render(){
        return <>
        <img src='./car-photo.jpeg'/>
        <p>This is the car component</p>
        <p>I am a {this.props.color} {this.props.make} {this.props.model}</p>
        </>
    }
    }



export default Car;