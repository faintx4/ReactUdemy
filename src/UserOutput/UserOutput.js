import React from 'react';

const userOutput = (props) => {
  const style = {
    backgroundColor: '#ccc',
    ':hover': {
      backgroundColor: 'red'
    }
  };

  return (
    <div style={style}>
      <p>User name is: {props.userName}!</p>
    </div>
  );
};

export default userOutput;