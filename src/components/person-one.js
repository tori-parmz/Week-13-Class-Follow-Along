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

export default class PersonOne extends React.Component {
    render(){
        let trait = this.props.trait;
        return(
        <>
        <h1>Hello, I am a {trait} person.</h1>
        </>
        )
    }
}