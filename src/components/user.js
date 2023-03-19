//display a hard coded value of James Bond h1,
//name it user

import React from 'react';

class User extends React.Component {
    constructor()
    {
        super();
        this.props = {firstName: 'default fn', lastName: 'default ln'}
    }
    render() {
        return <h1>{this.props.firstName} {this.props.lastName}</h1>
    }
}

export default User;