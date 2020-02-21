import React, {Component} from 'react';

function Child(props){
    return <div>
        <button onClick={props.myChildbutton}>Click me my child </button>
    </div>
}
export default Child; 
