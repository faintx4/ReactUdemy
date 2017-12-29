import React, {Component} from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import ValidationComponent from '../components/Validation/ValidationComponent';
import CharComponent from "../components/Char/CharComponent";

class App extends Component {
  // any change to container's state will trigger render method
  // changes should be through setState method!

  state = {
    persons: [
      {id: 'kjsdkjf', name: 'Vassya', age: 19},
      {id: '43kjnfd', name: 'Kolia', age: 23},
      {id: 'sdfpwwf', name: 'Ira', age: 43},
      {id: 'fdsdfdf', name: 'Dima', age: 44},
      {id: '2343fdf', name: 'Alex', age: 55},
    ],
    showPersons: true,
    inputText: ''
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  renderShowHideBtn = () => {
    return (
      <button onClick={this.togglePersonsHandler}>
        {
          this.state.showPersons ? "Hide people" : "Show people"
        }
      </button>
    );
  };

  removePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  };

  nameChangeHandler = (event, personId) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });

    persons[personIndex].name = event.target.value;

    this.setState({persons});

  };

  setInputText= (event) => {
    this.setState({
      inputText: event.target.value
    });
  };

  removeChar = (charIndex) => {
    let charsArray = this.state.inputText.split('');

    charsArray.splice(charIndex, 1);

    this.setState({
      inputText: charsArray.join('')
    });
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.removePersonHandler(index)}
            onChangeName={(event) => this.nameChangeHandler(event, person.id)}
          />
        );
      })
    }

    const charArray = this.state.inputText.split('').map((char, index) => {
      return <CharComponent char={char} key={index} removeChar={() => this.removeChar(index)}/>;
    });

    return (
      <div className="App">
        <h1>People</h1>
        {this.renderShowHideBtn()}
        <div style={{marginTop: '20px'}}>{persons}</div>
        <div>
          {charArray}
        </div>
        <p>text length: {this.state.inputText.length}</p>
        <input type="text" onChange={this.setInputText} value={this.state.inputText}/>
        <ValidationComponent textLength={this.state.inputText.length}/>
      </div>

    );
    // when we use jsx this is how react actually creates elements under the hood
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My text'));

  }

}

export default App;
