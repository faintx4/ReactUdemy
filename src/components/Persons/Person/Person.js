import React, {Component} from 'react';
import './Person.css';
import WithClass2 from '../../../hoc/withClass2';
import Aux from '../../../hoc/auxc';
import PropTypes from 'prop-types';

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
    if (this.props.position === 0) {this.inputElement.focus()}
  }

  render() {
    console.log('[Single Person.js] from render()');

    const style = {
      backgroundColor: '#ccc'
    };

    /*return (
      <div style={style} className="person-card">
        <h1 className="person-card__name" onClick={this.props.click}>My name is {this.props.name}</h1>
        <h2 className="person-card__age">I am {this.props.age} years old!</h2>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.changed}/>
      </div>
    );*/
    return (
      <Aux>
        <h1 className="person-card__name" onClick={this.props.click}>My name is {this.props.name}</h1>
        <h2 className="person-card__age">I am {this.props.age} years old!</h2>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.changed} ref={(input) => {this.inputElement = input}}/>
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
  position: PropTypes.number
};

export default WithClass2(Person, 'person-card');

