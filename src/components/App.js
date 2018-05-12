import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Keep Track of Expenses</h1>
      <p>$*100 = '100$'</p>
      <Form />
      </div>
    );
  }
}

export default App;
