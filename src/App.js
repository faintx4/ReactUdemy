import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // any change to container's state will trigger render method
  // changes should be through setState method!
  //test
  state = {
    persons: [
      {name: 'Vassya', age: 19},
      {name: 'Kolia', age: 23},
      {name: 'Ira', age: 43},
      {name: 'Dima', age: 44},
      {name: 'Alex', age: 55},
    ],
    showPersons: true
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

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={index}
          />
        );
      })
    }

    return (
      <div className="App">
        <h1>People</h1>
        {this.renderShowHideBtn()}
        {persons}

      </div>

    );
    // when we use jsx this is how react actually creates elements under the hood
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My text'));

  }

}

export default App;
