import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);

    console.log('[Persons.js] from constructor');
  }

  componentWillMount() {
    console.log('[Persons.js] from componentWillMount');
  }


  componentDidMount() {
    console.log('[Persons.js] from componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('UPDATE [Persons.js] componentWillReceiveProps', nextProps);
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE [Persons.js] shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }


  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE [Persons.js] componentWillUpdate', nextProps, nextState);
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('UPDATE [Persons.js] componentDidUpdate', prevProps, prevState);
  }


  render() {
    console.log('[Persons.js] from render()');

    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.removePersonHandler(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.nameChangeHandler(event, person.id)}/>
    });
  }
}


export default Persons;
