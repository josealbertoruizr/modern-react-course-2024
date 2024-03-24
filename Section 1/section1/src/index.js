// steos to build a component

// 1) Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// import { ReactDOM } from 'react';

// 2) Get a reference to the div ID root
const element = document.getElementById('root');
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(element);
// 4) Create a component

function App() {
    let number = Math.random();

    let message = "Bye there";
    if (number > 0.5) {

        message = "Hello there";

    }
    return <h1>{message}</h1>;
}
// 5) Show the component on the screen
root.render(<App />);