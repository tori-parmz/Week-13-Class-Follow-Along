/**
 * prop: character trait: good, evil, funny, musical etc, bard, warlock
 * display the text I am a trait person
 * state: we will have an array of character traits, and when we click a button,
 * we will choose a random character trait
 */

/**
 * 1. import react x
 * 2. define the class and it inherits from React.Component x
 * 3. Render & Return x
 * 4. Inside the return we have html x
 * 5. Make sure you export whatever you intend to import x
 */

import React from 'react';

export default class Person extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            trait: props.trait
        }
    }

    changeTrait()
    {
        //create array of strings
        let trait_arr = ['good', 'evil', 'fun', 'curious', 'ridiculous', 'brave', 'loving'];
        //evil = trait_arr[1];
        //find a random trait.
        let randomValue = Math.floor(Math.random() * trait_arr.length)
        console.log(trait_arr[randomValue]);
        this.setState({trait: trait_arr[randomValue]});
    }

    render(){
        let trait = this.state.trait;
        return(
        <>
        <h1>Hello, I am a {trait} person.</h1>
        <button onClick={() => this.changeTrait()}>Change trait</button>
        </>
        )
    }
}