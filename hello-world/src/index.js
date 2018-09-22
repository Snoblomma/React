import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// const user = {
//     firstName: 'Kate',
//     lastName: 'Snoblomma'
// }

// const element = getGreeting(user);

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );