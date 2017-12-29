import React from 'react';
import ValidationComponent from "../Validation/ValidationComponent";
import CharComponent from "./Char/CharComponent";

const Chars = (props) => {
  const charArray = props.inputText.split('').map((char, index) => {
      return <CharComponent char={char} key={index} removeChar={() => props.removeChar(index)}/>;
    });

  return (
    <div style={{marginTop: '20px'}}>
      <ValidationComponent textLength={props.inputText.length}/>
      <div style={{marginTop: '20px'}}>{charArray}</div>
      <p>text length: {props.inputText.length}</p>
      <input type="text" onChange={props.setInputText} value={props.inputText}/>
    </div>

  );
};

export default Chars;
