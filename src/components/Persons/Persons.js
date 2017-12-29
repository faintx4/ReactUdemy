import React from 'react';
import Person from "./Person/Person";


const Persons = (props) => {

  let persons = null;

  if (props.showPersons) {
    persons = props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => props.removePersonHandler(index)}
          onChangeName={(event) => props.nameChangeHandler(event, person.id)}
        />
      );
    });
  }


  return (
    <div style={{marginTop: '20px'}}>{persons}</div>
  );
};

export default Persons;