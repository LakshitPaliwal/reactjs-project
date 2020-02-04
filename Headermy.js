import React, {Component} from 'react';

function Headermy (){
    function changeme() {
        console.log('hello form');
    }
    return <div className="header">
             <h6>down hiiii lakshit paliwal</h6>
             <p>down my super badboy</p>
             <button onClick={changeme}>Header click here to change event</button>
         </div>                
    } 

export default Headermy;
