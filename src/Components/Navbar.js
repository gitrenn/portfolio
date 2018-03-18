import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link, animateScroll as scroll } from 'react-scroll';
import '../Views/Views.css';

export default class MenuExampleStackable extends Component {
  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {

    return (
      <div>
        <Button.Group size='small' primary className='navbar'>     
            <Button>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={500} >
            About
          </Link>
          </Button>
          <Button>
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-200} duration={500} >
            Projects
          </Link>
          </Button>
          <Button>
          <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-210} duration={500} >
            Experience
          </Link>
          </Button>
          <Button>
          <Link activeClass="active" to="tech" spy={true} smooth={true} offset={-200} duration={500} >
            Tech
          </Link>
          </Button>
          <Button>
          <a onClick={() => scroll.scrollToBottom()}>
            Connect
          </a>
          </Button>
        </Button.Group>      
      </div>
    )
  }
}