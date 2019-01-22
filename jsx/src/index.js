// ---- 
// Import the React and ReactDOM libraries
import React from 'react'; 
import ReactDOM from 'react-dom'; 


// ----- 
// Create a React Component to render
const App = () => { 
    const buttonText = 'Click Me!';
    const style = { backgroundColor:'blue', color : '#FFF' };
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name</label>
            <input id="name" type="text" />
            <button style={style}>{buttonText}</button>
        </div>
    ); 
} 


// ---- 
// Take the React Component and show it on the screen
ReactDOM.render( 
    <App />, 
    document.querySelector( '#root' ) 
); 

