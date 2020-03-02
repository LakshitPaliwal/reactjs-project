import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// (those value we are writing in { }  that value we have to pass in parameter )


//when we write props as parameter then we don't have to use {} in parameter
// const Newdemo=(props)=>{
//    return <div>
//         <h1 > GPSSSSSSSsss  {props.lname} </h1>
        
//    </div>
// }

   // OR

// if we are writing lname as parameter then we don't need to put write {} , 
// if we are  writing props as parameter  
const Newdemo=({lname})=>{
    return <div>
         <h1 > GPSSSSSSSsss  {lname} </h1>
         
    </div>
 }
            //OR
// class Newdemo extends Component{
//     render(){
//         return <div>
        
//             <h1 > GPSSSSSSSsss  {this.props.lname} </h1>
        
//         </div>

//     }
// }
export default Newdemo;
