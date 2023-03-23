// class based component called button that will display a button

import React from 'react';

/**
 * 1. import 
 * 2. define the class and it inherits from React.Component
 * 3. Render & Return
 * 4. Inside the return we have html
 * 5. Make sure you export whatever you intend to import
 */

export default class Button extends React.Component {

    constructor(props)
    {
        super(props);//inherit
        this.state = {
            text: props.text
        }
    }
    changeState()
    {
        let currentText = this.state.text;
        this.setState({text: 'New Button'});
    }


    render() {
        let text = this.state.text;
        return(
            <button onClick={() => this.changeState()}>{text}</button>
        )
    }
}