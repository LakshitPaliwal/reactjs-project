import React, { Component } from 'react';
import Headermy from './Headermy';
import Footermy from './Footermy';
import './App.css';


class App extends Component  {
  render(){
  return (
    <div className="App">
    <div className="App-header">
    <Headermy text1="thiiiiiiis is contact"/>
    <p>
          Edited  by lakshit paliwal and save to reload.
        </p>       
    <Headermy text1="thiiiiiiis is Frequency"/>
    
        <p>
          Edited  by lakshit paliwal and save to reload.
         
         </p>
        <Headermy text1="thiiiiiiis is personal"/>
      </div>
      
      <p>hello paliwal ji</p>
   
      <Footermy name1="this a is footer by lakshit "/>
     </div>
   );
  }
}

export default App;
