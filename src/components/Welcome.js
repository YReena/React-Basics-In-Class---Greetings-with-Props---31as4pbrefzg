// write code for Welcome component here
import React from 'react';

const Welcome =(props) =>{
    return(
        <div>
            <h1>"Hey !" {props.name} is name of the student</h1>
            <h2>Welcome to Newton School</h2>
        </div>
        
    );
}
 export default Welcome;