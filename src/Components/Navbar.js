import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
 
const durationFn = function(deltaTop) {
  return deltaTop;
};

export default class MenuExampleStackable extends Component {
  state = {}

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>  
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable secondary>
        <Menu.Item>
          <a onClick={this.scrollToTop}>RJ</a>
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        >
          Portfolio
        </Menu.Item>

        <Menu.Item
          name='experience'
          active={activeItem === 'experience'}
          onClick={this.handleItemClick}
        >
          Experience
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