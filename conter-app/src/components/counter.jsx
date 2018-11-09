import React, { Component } from "react";

 class Counter extends Component {
  state = {

    count: this.props.counter.value,// or this.props.value

    tags: ["tag1", "tag2", "tag3"]

    // imageURL: 'https://picsum.photos/200'
  };

  //  styles = {
  //      fontSize: 50,
  //      fontWeight:"bold"

  //  };

  // constructor(){                      // constructor + handleIncrement()
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    let i = this.state.count;

    if (i === 0) {
      classes += "warning";
    } else if (i === 10) {
      classes += "success";
    } else {
      classes += "primary";
    }

    // classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let i = this.state.count;
    if (i === 0) {
      return "zero";
    }
    if (i === 10) {
      return "finish";
    } else {
      return i;
    }

    //return this.state.count === 0 ? 'zero' : this.state.count;
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    }
    return (
      <ul>
        {this.state.tags.map(myTag => (
          <li key={myTag}>{myTag}</li>
        ))}
      </ul>
    );
  }

  // handleIncrement(){                              // handleIncrement() + constructor
  //     console.log('increment clicked', this)
  // }

  handleIncrement = () => {
   // console.log("increment clicked", this);
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleDecrement = () => {
    //console.log("increment clicked", this);
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleReset = () => {
      this.setState({ count: this.state.count = 0 });
      console.log("reset clicked", this.state.count);
  };

  render() {
     // console.log('props', this.props)
    return (
        
      <div>
          {this.props.children}
        {/* <h1>Hello World</h1>
                    <img src={this.state.imageURL} alt=""/> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-dark btn-sm m-2"
        >
          Decrement
        </button>

        <button
          onClick={this.handleReset}
          className="btn btn-warning btn-sm,-2"
        >
          Reset
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}// or props.id
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;

// also may
//  <React.Fragment>
//     <h1>Hello World</h1>
//         <button>Increment</button>
//     </React.Fragment>
