import React from 'react';
import './Person.css';
import Radium from "radium";


const a = null;
const person = (props) => {
    //console.log(props);
   // console.log(props.children);
    return (
        <div className="Person">
            <p onClick={props.click}> I am {props.name} I have {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} placeholder={props.name}/>
            <button onClick={props.delete}>delete </button>
        </div>
        
    );
}
export default Radium(person);