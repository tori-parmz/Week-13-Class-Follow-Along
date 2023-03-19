import React from 'react';
import AddButton from './AddButton';
import SubtractButton from './SubtractButton';

let e = React.createElement;
class Buttons extends React.Component {
render() {
    return e('div', { className: 'container' },
    e('h1', {},
        'Count:',
        e('span', { className: 'badge bg-secondary' }, 0)
    ),
    e('div', {},
    e(AddButton, {}),
    ' ',
    e(SubtractButton, {})
    )
    );
}
}

export default Buttons;