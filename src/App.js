import React, { Component } from 'react';
import './App.css';
import AutocompleteText from './AutocompleteText'
import countries from './countries';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="app-component">
      <div className="app-component">
        <AutocompleteText country={countries}/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
