import React,{Component} from 'react';

class Footermy extends Component{
    constructor() {
        super();
        this.state = {
            myusername : ''
        }
        // this.changeText = this.ChangeText.bind(this);
    }
 

    changeText = (event) => {
          this.setState({
                myusername : event.target.value
                 })
        }
 
    whenSubmit = (event) => {
            console.log(this.state.myusername);
        }




       render(){
        return <div> 
           

            {/* <h1>{this.props.namefuck} (this comes from parents )</h1>
            <h2>{this.state.desc} (this is a state manage with component)</h2>
            <h3>{this.state.desc1} (A)</h3>
            {/* <button onClick={ this.changeText.bind(this)} > Change Text</button> */}
            {/* <button onClick={() => this.changeText()} > Change Text</button> */}
            {/* <button onClick={this.changeText }> Change Text</button> */}

            <form onSubmit={this.whenSubmit}>
                <br></br>
                <label>UserName </label>
                <input type="text"  
                value={this.state.myusername}  
                onChange={this.changeText}></input>
            </form>
            <div>{this.state.myusername}</div>
            {/* <input type="submit" onClick={this.whenSubmit}></input> */}
            <button type="submit" onClick={this.whenSubmit}>Submit</button>
            </div>
    }

}

export default Footermy; 
