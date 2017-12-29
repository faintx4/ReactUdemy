import React from 'react';

const Cockpit = (props) => {
  return (
    <div style={{marginTop: '20px'}}>
       <h1>People</h1>
      <button onClick={props.togglePersonsHandler}>
        {
          props.showPersons ? "Hide people" : "Show people"
        }
      </button>
    </div>
  );
};

export default Cockpit;
