import React from 'react';
import { Segment, Tab, Label, Icon } from 'semantic-ui-react';


const about = [
    {
        menuItem: 'About Me', render: () => <Tab.Pane><Label ribbon color='blue'></Label><p>
            Passionate full-stack web developer with a degree in IT. Naturally curious and quick to learn and apply new technologies to develop better, faster and more efficient products. Business-focused with strong analytical and problem-solving skills.
        </p></Tab.Pane>
    },

]

const experience = [
    { menuItem: 'experience', render: () => <Tab.Pane><Label ribbon color='blue'></Label>Please visit links below to get more information</Tab.Pane> }
]

const contact = [
    { menuItem: 'Contact Me', render: () => <Tab.Pane>
        <Label ribbon color='blue'></Label>
        <a href='https://www.linkedin.com/in/ren-jing-2372b81b/'><Icon name='linkedin' size='huge'/></a>
        <a href='https://github.com/gitrenn'><Icon name='github' size='huge'/></a>
        <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top"><Icon name='mail' size='huge' /></a>
      
        </Tab.Pane> }
]

const Body = () => {
    return (
        <div>
            <Segment>

                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={about} />

            </Segment>
            <Segment>

                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={experience} />

            </Segment>
            <Segment>

                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={contact} />

            </Segment>
        </div>
    )
}

export default Body;