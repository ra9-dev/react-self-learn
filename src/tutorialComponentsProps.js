import React from 'react';
import ReactDOM from 'react-dom';

// tutorial for learning about components and props and how they interact with react DOM

// this is a sample components => simplest way
// COMPONENTS are like JavaScript functions.. which takes PROPS as inputs and return REACT ELEMENTS
// PROPS mean properties
function Welcome(props) {
    return <h2>Hello, {props.name}</h2>;
}

// these are also called "function components" as they are literally JavaScript functions

// RENDERING A COMPONENT
const element = <Welcome name="Iris" />;

// ** when REACT sees an ELEMENT representing a user defined COMPONENT.. it passes JSX attributes and children to this COMPONENT as single object, PROPS

// uncomment this to test step 1
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );


// COMPONENTS can refer other components in their output allowing us to use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: all these are components in React apps.

function App() {
    // this is how we return multi line JSX code--react elements.. remember ??
    return (
        <div>
            <Welcome name="Alfred" />
            <Welcome name="Bruce" />
            <Welcome name="Robin" />
            <Welcome name="Joker" />
        </div>
    );
}

// uncomment this to test step 2
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// Typically React apps have a single `App` component at the very top



// ------------------------------------EXTRACTING COMPONENTS------------------------------------
function CommentComplex(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

// this above structure is a bit tricky as extracting and changing any part is complicated as it is nested
// lets start extraction now
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>
}

// simplified Comment component
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

// All React components must act like pure functions with respect to their props.
// Pure functions are those which don't change their inputs and return same value even if called multiple times
// Reason of this.. what i assume is.. components are used dynamically at many places in your UI. Changing props at one stage could impact other parts too
