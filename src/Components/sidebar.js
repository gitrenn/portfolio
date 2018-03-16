import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Sidebar extends React.Component {
  render(){
    return(
        <Dropdown  icon='content' floating button labeled color='blue'>
          <Dropdown.Menu>
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Projects</Dropdown.Item>
            <Dropdown.Item>Experience</Dropdown.Item>
            <Dropdown.Item>Tech</Dropdown.Item>
            <Dropdown.Item>
                <a onClick={() => scroll.scrollToBottom()}>
                  Connect
                </a>
            </Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown>
    )
  }
}
export default Sidebar;