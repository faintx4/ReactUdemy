import React from 'react';

const CharComponent = (props) => {
  const styles = {
    display: 'inline-block',
    padding: '10px 20px',
    marginRight: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer'
  };

  return (
    <div style={styles} onClick={props.removeChar}>{props.char}</div>
  );
};

export default CharComponent;