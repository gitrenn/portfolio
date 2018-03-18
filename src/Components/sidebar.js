import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Link, animateScroll as scroll } from 'react-scroll';
import '../Views/Views.css';

class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }

  render(){
    return(
        <Dropdown icon='content' floating button labeled color='blue' closeOnChange>
          <Dropdown.Menu className='sidebar'>
              <a onClick={this.scrollToTop}>
                <Dropdown.Header icon='user circle' content='Ren Jing' />
              </a>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link activeClass="active" className="about" to="about" spy={true} smooth={true} offset={-50} duration={500} >
                About
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                Projects
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link activeClass="active" className="experience" to="experience" spy={true} smooth={true} offset={-50} duration={500} >
                Experience
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link activeClass="active" className="tech" to="tech" spy={true} smooth={true} duration={500} >
                Tech
              </Link>
            </Dropdown.Item>
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