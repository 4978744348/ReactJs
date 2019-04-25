import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import './App.css';

const flexDirection_Col = {display:" flex", flexDirection: "column"};
const flexDirection_Row = {display:" flex", flexDirection: "row"};
const flexDisplay = {display:"flex"};


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      total:0,
      transfer:0,
      eighProcent:0,
      fiveProcent:0,
      threeProcent:0,
      zeroDot:0
    };
  }
  handleInput = (e) => { 
    let newState = this.state; 
    newState.total = e.target.value
    if(e.target.value === ""){
      newState.total = 0;
      newState.eighProcent = 0;
      newState.fiveProcent = 0;
      newState.threeProcent = 0;
      newState.zeroDot = 0;
      newState.transfer = 0;
    }
    this.setState(newState);
  }

  callCalculate = () => {    
    let {total} = this.state;
    let newState = this.state;
    
    newState.eighProcent = Number((8 * total / 100).toFixed(2));
    newState.fiveProcent = Number((5 * total / 100).toFixed(2));
    newState.threeProcent = Number((3 * total / 100).toFixed(2));
    newState.zeroDot =  Number((0.29 * total / 100).toFixed(2));
    newState.transfer =  Number((total - (newState.eighProcent + newState.zeroDot)).toFixed(2));

    this.setState(newState);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.callCalculate();
    }
  }


  render() {
    return (
      <div className="main-container" style={flexDirection_Col}>
          <div className="input-field" style={flexDirection_Row}>
              
              <div className="txt-field" style={flexDisplay}>
                <TextField 
                  onChange={this.handleInput}
                  onKeyPress={this.handleKeyPress}
                  label="Enter the sum"
                  variant="outlined"
                />
              </div>
              

             <div className="button" style={flexDisplay}>
              <Button 
                  onClick = {this.callCalculate}
                  color = "primary"
                  variant = "contained"
                >
                  calculate
              </Button>
             </div>

          </div>  

          <div className="fonts" style={flexDirection_Row}>Total: 
            <div className="value-total">{this.state.total}</div>
          </div>
          <div className="fonts" style={flexDirection_Row}>Transfer: 
            <div className="value-transfer">{this.state.transfer}</div>
          </div>   
          <div className="fonts" style={flexDirection_Row}>8%: 
            <div className="value-eght">{this.state.eighProcent}</div>
          </div>
          <div className="fonts" style={flexDirection_Row}>5%: 
            <div className="value-five">{this.state.fiveProcent}</div>
          </div>
          <div className="fonts" style={flexDirection_Row}>3%: 
            <div className="value-three">{this.state.threeProcent}</div>
          </div>
          <div className="fonts" style={flexDirection_Row}>0.29%: 
            <div className="value-dot">{this.state.zeroDot}</div>
          </div>
        

      </div>
    );
  }
}

export default App;
