import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // any change to container's state will trigger render method
  // changes should be through setState method!
  // test
  state = {
    persons: [
      {id: 'kjsdkjf', name: 'Vassya', age: 19},
      {id: '43kjnfd', name: 'Kolia', age: 23},
      {id: 'sdfpwwf', name: 'Ira', age: 43},
      {id: 'fdsdfdf', name: 'Dima', age: 44},
      {id: '2343fdf', name: 'Alex', age: 55},
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
