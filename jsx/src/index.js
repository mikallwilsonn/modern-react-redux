// ---- 
// Import the React and ReactDOM libraries
import React from 'react'; 
import ReactDOM from 'react-dom'; 


// ----- 
// Create a React Component to render
const App = () => { 
    return (
        <div>
            <label class="label" for="name">Enter Name</label>
            <input id="name" type="text" />
            <button style="background-color:blue; color:#FFF;">Submit</button>
        </div>
    ); 
} 


// ---- 
// Take the React Component and show it on the screen
ReactDOM.render( 
    <App />, 
    document.querySelector( '#root' ) 
); 

