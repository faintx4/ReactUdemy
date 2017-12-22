import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="person-card">
      <h1 className="person-card__name">My name is {props.name}</h1>
      <h2 className="person-card__age">I am  {props.age} years old!</h2>
      <p>{props.children}</p>
    </div>

  );
};

export default person;