import React from 'react';
import ReactDOM from 'react-dom';

// tutorial for learning how render elements work

function exampleOneBasic() {
    const element = <h1>Hello, world!!!</h1>;
    // this is JSX way of defining react element
    // element are what "components" are made up of.. don't get confused

    ReactDOM.render(element, document.getElementById('root'));
    //render it to root DOM node.. which should be ideally controlled by React
}

// react elements are IMMUTABLE.. once created cant change its children or attributes..
// an element is like single frame in a movie.. represents the UI at a certain point in time
// exampleOneBasic();


// so far only way to update is to create a new element and render it to DOM
function exampleTwoUpdate() {
    function tick() {
        const element = (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
    }
    setInterval(tick, 3000);
}
// React Docs says, in practice, most React apps only call `ReactDOM.render()` once.
exampleTwoUpdate();
// try inspecting this element in browser.. we can see it only updates the time and other HTML elements are stayed as it is.. this means React update only what needs to be updated

// it is achieved by: React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

// Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.
