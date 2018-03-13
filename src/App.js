import React, { Component } from 'react';
import './App.css';
import Jumbotron from './Components/jumbotron';
import Body from './Views/Body';
import Footer from './Views/Footer';

import { Container } from 'semantic-ui-react';
import Sticky from 'react-sticky-el';


class App extends Component {
  render() {
    return (
      <div className='App' style={{ background: '#fafbfc'}}>
        <div className='headerDiv'>
        <Sticky>
        <Jumbotron/>
        </Sticky>
        </div>
        <div className='bodyDiv'>
          <Container >
            <Body />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
