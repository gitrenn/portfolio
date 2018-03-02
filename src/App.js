import React, { Component } from 'react';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Jumbotron vertical/>
        <Container>
          <Body />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
