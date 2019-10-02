import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},      
      { name: 'John', age: 21},      
      { name: 'Dieter', age: 25}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'New name', age: 28},      
        { name: 'John', age: 21},      
        { name: 'Dieter', age: 87}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},      
        { name: event.target.value, age: 21},      
        { name: 'Dieter', age: 25}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>This is the App aaaa</h1>
        <button style={ style } onClick={this.switchNameHandler}>Switch</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler}            
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>my hobbies are: rowing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>my hobbies are: rowing</Person>
      </div>
    );
  }
}

export default App;

// create-react-app my-app --scripts-version 1.1.5