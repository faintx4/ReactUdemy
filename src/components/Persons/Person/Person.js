import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);

    console.log('[Single Person.js] from constructor');
  }

  componentWillMount() {
    console.log('[Single Person.js] from componentWillMount');
  }


  componentDidMount() {
    console.log('[Single Person.js] from componentDidMount');
  }

  render() {
    console.log('[Single Person.js] from render()');

    const style = {
      backgroundColor: '#ccc'
    };

    return (
      <div style={style} className="person-card">
        <h1 className="person-card__name" onClick={this.props.click}>My name is {this.props.name}</h1>
        <h2 className="person-card__age">I am {this.props.age} years old!</h2>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.onChangeName}/>
      </div>
    );
  }
}


export default Person;

