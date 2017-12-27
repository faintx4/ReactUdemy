import React from 'react';

const ValidationComponent = (props) => {
  const validationMessage = props.textLength < 5 ? 'Text too short': 'Text long enough';

  return (
    <div>{validationMessage}</div>
  );
};

export default ValidationComponent;