import React, { Component } from 'react';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Body from './Components/Body';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Jumbotron />
        
        <Container>
          <Body />
        </Container>
      </div>
    );
  }
}

export default App;
