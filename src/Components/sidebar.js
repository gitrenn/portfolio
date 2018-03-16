import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Sidebar = () => (
  <Dropdown  icon='content' floating button labeled color='blue'>
    <Dropdown.Menu>
      <Dropdown.Item>About</Dropdown.Item>
      <Dropdown.Item>Projects</Dropdown.Item>
      <Dropdown.Item>Experience</Dropdown.Item>
      <Dropdown.Item>Tech</Dropdown.Item>
      <Dropdown.Item>Connect</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default Sidebar;