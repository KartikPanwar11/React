import React from "react";
import ReactDOM from "react-dom/client";

//React Element

// const heading = React.createElement('h1',{id:"heading"},'Hello from React Element');
const Title = () => (
    <h1 id="heading">Hello from React Component</h1>
);
const JsxHeading = () => 
 (
 <div id='newHeading'>
    <Title/>
 <h1 id="heading">Hello from JSX!</h1>
 </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JsxHeading/>);

console.log(<JsxHeading/>);