import React, { Component } from 'react';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Body from './Views/Body';
import Footer from './Components/Footer';

import { Container } from 'semantic-ui-react';
import Sticky from 'react-sticky-el';

const styles = {
  fontFamily: "Lato', sans-serif"
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Sticky >
        <Jumbotron/>
        </Sticky>
        <div style={{ position: 'relative', zIndex: '-1', background: '#fafbfc'}}>
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
