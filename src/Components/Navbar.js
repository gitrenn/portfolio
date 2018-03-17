import React, { Component } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
import { Link, animateScroll as scroll } from 'react-scroll';

export default class MenuExampleStackable extends Component {
  constructor(props){
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {

    return (
      <Menu secondary>
        <Menu.Item className='about'>
          <a onClick={this.scrollToTop}>
            <Button animated='fade' primary>
              <Button.Content visible>RJ</Button.Content>
              <Button.Content hidden>
                <Icon name='home' size='mini'/>
              </Button.Content>
            </Button>
          </a>
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item className='about'>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={500} >
            About
          </Link>
        </Menu.Item>

        <Menu.Item className='portfolio'>
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-200} duration={500} >
            Projects
          </Link>
        </Menu.Item>

        <Menu.Item className='experience'>
          <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-210} duration={500} >
            Experience
          </Link>
        </Menu.Item>

        <Menu.Item className='tech'>
          <Link activeClass="active" to="tech" spy={true} smooth={true} offset={-200} duration={500} >
            Technologies
          </Link>
        </Menu.Item>

        <Menu.Item className='connect'>
          <a onClick={() => scroll.scrollToBottom()}>
            Connect
          </a>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}