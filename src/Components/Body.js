import React from 'react';
import { Segment, Tab, Label, Icon, Grid } from 'semantic-ui-react';
import Bio from './Bio';
import Exp2 from './Exp2';
import Exp3 from './Exp3';

const about = [
    {
        menuItem: 'About Me', render: () => <Tab.Pane><Label ribbon color='blue'></Label><p>
            Passionate full-stack web developer with a degree in IT. Naturally curious and quick to learn and apply new technologies to develop better, faster and more efficient products. Business-focused with strong analytical and problem-solving skills.
        </p></Tab.Pane>
    },

]

const experience = [
    { menuItem: 'Experience', render: () => (
        <Tab.Pane>
            <Label ribbon color='blue' />
            <Grid stackable columns={3}>
                <Grid.Column>
                    <Icon name='laptop'>
                        <p>Coding Bootcamp UCI Continuing Education</p>
                    </Icon>
                </Grid.Column>
                <Grid.Column>
                    <Icon name='student'>
                        <p>SIU Student Web Development Team</p>
                    </Icon>
                </Grid.Column>
                <Grid.Column>
                    <Icon name='hospital'>
                        <p>Southern Illinois Healthcare</p>
                    </Icon>
                </Grid.Column>
            </Grid>
            
        </Tab.Pane>
    ) }
]

const contact = [
    { menuItem: 'Contact Me', render: () => <Tab.Pane>
        <Label ribbon color='blue'></Label>
        <a href='https://www.linkedin.com/in/ren-jing-2372b81b/'><Icon name='linkedin' size='huge'/></a>
        <a href='https://github.com/gitrenn'><Icon name='github' size='huge'/></a>
        <a href="mailto:rjingmembers@gmail.com?Subject=Hello%20again" target="_top"><Icon name='mail' size='huge' /></a>

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
                <Grid stackable columns={3}>
                <Grid.Column>
                    
                    <Bio />
                </Grid.Column>
                <Grid.Column>
                    <Exp2 />
                </Grid.Column>
                <Grid.Column>
                    <Exp3 />
                </Grid.Column>
            </Grid>
            </Segment>
            <Segment>

                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={contact} />

            </Segment>
        </div>
    )
}

export default Body;