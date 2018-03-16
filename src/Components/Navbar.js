import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, animateScroll as scroll } from 'react-scroll';

export default class MenuExampleStackable extends Component {
  constructor(props){
    super(props);
    this.state = {}

    this.scrollToTop = this.scrollToTop.bind(this);

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable secondary>
        <Menu.Item>
          <a onClick={this.scrollToTop}><b>RJ</b></a>
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          <Link activeClass="active" className="about" to="about" spy={true} smooth={true} offset={-200} duration={500} >
            About
          </Link>
        </Menu.Item>

        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        >
          <Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} offset={-200} duration={500} >
            Projects
          </Link>
        </Menu.Item>

        <Menu.Item
          name='experience'
          active={activeItem === 'experience'}
          onClick={this.handleItemClick}
        >
          <Link activeClass="active" className="experience" to="experience" spy={true} smooth={true} offset={-210} duration={500} >
            Experience
          </Link>
        </Menu.Item>

        <Menu.Item
          name='tech'
          active={activeItem === 'tech'}
          onClick={this.handleItemClick}
        >
          <Link activeClass="active" className="tech" to="tech" spy={true} smooth={true} duration={500} >
            Technologies
          </Link>
        </Menu.Item>

        <Menu.Item
          name='connect'
          active={activeItem === 'connect'}
          onClick={this.handleItemClick}
        >
          <a onClick={() => scroll.scrollToBottom()}>
            Connect
          </a>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}