import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  const style = {
    backgroundColor: '#ccc',
    ':hover': {
      backgroundColor: 'red'
    }
  };

  return (

    <div style={style} className="person-card">
      <h1 className="person-card__name" onClick={props.click}>My name is {props.name}</h1>
      <h2 className="person-card__age">I am {props.age} years old!</h2>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.onChangeName}/>
    </div>

  );
};

export default Radium(person);
