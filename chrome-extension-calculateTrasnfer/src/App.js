import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import './App.css';

const flexDirection_Col = {display:" flex", flexDirection: "column"}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      total:0,
      transfer:0,
      eighProcent:0,
      fiveProcent:0,
      threeProcent:0
    };
  }
  handleInput = (e) => {   
    this.setState({
      total:e.target.value
    });
  }

  callCalculate = () => {    
    let {total} = this.state;
    let newState = this.state;

    newState.eighProcent = 8 * total / 100;
    newState.fiveProcent = 5 * total / 100;
    newState.threeProcent = 3 * total / 100;
    newState.transfer = total - newState.eighProcent;

    this.setState(newState);
  }


  render() {
    return (
      <div className="main-container" style={flexDirection_Col}>

          <div style={{
            background:"green",
            display: "flex",
            flexDirection: "row",            
          }}>
              total: <input onBlur={this.handleInput}/>
              <Button onClick = {this.callCalculate}>calculate</Button>

          </div>   
          <div>Transfer: {this.state.transfer}</div>   
          <div>8%: {this.state.eighProcent}</div>
          <div>5%: {this.state.fiveProcent}</div>
          <div>3%: {this.state.threeProcent}</div>
        

      </div>
    );
  }
}

export default App;
