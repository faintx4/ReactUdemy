import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <h1>People</h1>
        <button onClick={this.togglePersonsHandler}>
          {
            this.state.showPersons ? "Hide people" : "Show people"
          }
        </button>
        {
          this.state.showPersons ?
            this.state.persons.map((person, index) => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  key={index}
                />
              );
            })

            : null
        }

      </div>

    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My text'));

  }

}

export default App;
