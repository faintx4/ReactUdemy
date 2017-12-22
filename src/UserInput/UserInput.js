import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <div>
      <input className="UserInput" type="text" value={props.userName} onChange={props.onNameChange}/>
    </div>
  );
};

export default userInput;