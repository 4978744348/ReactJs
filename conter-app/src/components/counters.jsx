import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      // { id: 1, value: Math.floor(Math.random() * 10) },
      // { id: 2, value: Math.floor(Math.random() * 10) },
      // { id: 3, value: Math.floor(Math.random() * 10) },
      // { id: 4, value: Math.floor(Math.random() * 10) }
    ]
  };

  handlerDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    //console.log("Event handler Called", counterId);
  };

  handleAdd = () => {
    let arr = this.state.counters;
    console.log("begin:", arr);
    let index = arr.length - 1;
    console.log("index=", arr[index]);
    let randId = Math.floor(Math.random() * 1000);
    let obj = { id: randId, value: Math.floor(Math.random() * 10) };
    arr.push(obj);
    console.log("end:", arr);
    this.setState(arr);
  };

  handlerClearAll = () => {
    let arr = this.state.counters;
    for (var i = 0; i < arr.length; i++) {
      delete arr[i];
    }
    this.setState(arr);
  };

  handlerResetAll = () =>{
     const resetAll = this.state.counters.map(c => {
       c.value = 0;
       return c;
     });
     console.log(resetAll);
     this.setState(resetAll);
  };

//   handlerIncrement = counter => {
//   console.log(counter)
//   const increment = {...this.state.counters};
//  increment.indexOf(counter);
//   //console.log('index:', index);
//   increment[0] = {...counter};
//   increment[0].value++;
//   this.setState({increment});
// }


  render() {
    return (
      <div>
        <button 
        onClick={this.handleAdd} 
        className="btn btn-success btn-sm m-2"
        >
          Add
        </button>

        <button
          onClick={this.handlerResetAll}
          className="btn btn-warning btn-sm m-2"
        >
          Reset all
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handlerDelete}
           // onIncrement={this.handlerIncrement}
            //id={counter.id}
            //value={counter.value}
            //selected={true}
            // adc={123}
            counter={counter} // also can to pass button---> onClick={() => this.props.onDelete(this.props.id)}// or counter.id
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}

        <button
          onClick={this.handlerClearAll}
          className="btn btn-danger btn-sm m-2"
        >
          Clear all
        </button>
      </div>
    );
  }
}

export default Counters;
