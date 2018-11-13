import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";
import Radium from "radium"; //, {StyleRoot} 

class App extends Component {// lesson 43
  
  state = {
    persons: [
      // array objects
      { id:"1",name: "Evgen", age: "31" },
      { id:"2",name: "Nastia", age: "32" },
      { id:"3",name: "Mira", age: "4" }
    ],
    showPersons: false
  };

  nameChangedHandler=(event, id) =>{

    const personArrIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personArrIndex]};
    //const person = Object.assign({}, this.state.persons[personArrIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personArrIndex] = person;

    this.setState({persons: persons});

    // this.setState({
    //   persons: [
    //     { name: "Evgen", age: "31" },
    //     { name: event.target.value, age: "32" },
    //     { name: "Miraslava", age: "4" }
    //   ]
    // });
  }

  switchNameHandler = (newName) => {
    console.log(this)
    this.setState({
      persons: [
        { name: newName, age: "31" },
        { name: "Anastasia", age: "32" },
        { name: "Miraslava", age: "4" }
      ]
    });
  };

  togglePersonHandler = () =>{
   const doesShowPersons = this.state.showPersons;
   this.setState({showPersons: !doesShowPersons});
  }

  deletePersinHandler = (index) => {
    //const personList = this.state.persons.slice(); //slice() -- return new array
    const personList = [...this.state.persons] // copy array
     personList.splice(index,1);
     this.setState({persons: personList})
  }

  render() {

      const style = {
        backgroundColor: "green",
        color: "white",
        font: "inherit",
        border: "1x solid blue",
        padding: "8px",
        cursor: "pointer",
        margin: "6px"
      }

      let personsList = null;

      if(this.state.showPersons === true){
        personsList = (
        <div> 
        {this.state.persons.map((p, index) => {
          return <Person
                  delete={() => this.deletePersinHandler(index)}
                  //click={() => this.deletePersinHandler(index)}
                  name={p.name}
                  age={p.age}
                  key={p.id}
                  changed={(event) => this.nameChangedHandler(event, p.id)} />
                  
            })}
        
        <button style={style[":hover"]={
          backgroundColor: "lightred",
          color: "black"
        }}
        onClick={this.switchNameHandler.bind(this, "Evgeniy")}// or <button onClick={() => this.switchNameHandler("Evgeniy")}> Switch name </button>
      >
        switch names
      </button>
    </div>
        );
        style.backgroundColor = "red";
      }

      //let classes = ['red','bold'].join(' ');// --> string "red bold"
      const classes = [];
      if(this.state.persons.length <=2){
        classes.push("red");
      }
      if(this.state.persons.length <=1){
        classes.push("bold");
      }
      console.log(classes)
    return (
     
          <div className="App">
            <p className={classes.join(" ") }> it is react </p>
            <button
              style={style}
              onClick={this.togglePersonHandler}
            >
              Drop-down list
            </button>
            {personsList}
          </div>
      
    );

    //return React.createElement('div', null, 'h1',"Hello");
  }
}

export default App;
 