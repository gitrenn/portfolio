import React, { Component } from 'react';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Body from './Components/Body';
import Footer from './Components/Footer';

import { Container } from 'semantic-ui-react';
import Sticky from 'react-sticky-el';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Sticky >
        <Jumbotron/>
        </Sticky>
        <Container style={{ position: 'relative', zIndex: '-1'}}>
          <Body />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
