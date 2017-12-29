import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
import Chars from "../components/Chars/Chars";
import './App.css';

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
    return (
      <div className="App">
        <Chars inputText={this.state.inputText} removeChar={this.removeChar} setInputText={this.setInputText}/>

        <Cockpit showPersons={this.state.showPersons} togglePersonsHandler={this.togglePersonsHandler}/>

        <Persons persons={this.state.persons}
                 showPersons={this.state.showPersons}
                 removePersonHandler={this.removePersonHandler}
                 nameChangeHandler={this.nameChangeHandler}
        />
      </div>

    );
    // when we use jsx this is how react actually creates elements under the hood
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My text'));

  }

}

export default App;
