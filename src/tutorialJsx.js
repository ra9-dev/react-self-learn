import React from 'react';
import ReactDOM from 'react-dom';


// JSX Example
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

function getGreeting(user) {
    if (user) {
        return <h1>Wassup, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const element = <img src={user.avatarUrl} />;


ReactDOM.render(
    getGreeting(),
    document.getElementById('root')
);
