import React from 'react';
import Person from './Person.css';
import Radium from "radium";


const a = null;
const person = (props) => {
   const style = {
       '@media (min-width: 900px)':{
           width: '450px'
       }
   }
   const rand = Math.random();
   if(rand > 1.7){
       throw new Error('Something went wrong')
   }
    return (
       
        <div className="Person">
            <p onClick={props.click}> I am {props.name} I have {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} placeholder={props.name}/>
            <button onClick={props.delete}>delete </button>
        </div>
        
    );
}
//export default Radium(person);
export default Radium(person);