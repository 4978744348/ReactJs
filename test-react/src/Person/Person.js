import React from 'react';
import clasees from './Person.css';
//import Radium from "radium";


const a = null;
const person = (props) => {
//    const style = {
//        '@media (min-width: 500px)':{
//            width: '450px'
//        }
//    }
    return (
        <div className={clasees.Person}>
            <p onClick={props.click}> I am {props.name} I have {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} placeholder={props.name}/>
            <button onClick={props.delete}>delete </button>
        </div>
        
    );
}
//export default Radium(person);
export default person;