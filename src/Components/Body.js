import React from 'react';
import { Segment, Tab, Label, Icon, Grid } from 'semantic-ui-react';
import Exp1 from './Exp1';
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



const Body = () => {
    return (
        <div>
            <Segment vertical>
                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={about} />
            </Segment>
            <Segment vertical>
                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={experience} />
                <Grid stackable columns={3}>
                <Grid.Column>    
                    <Exp1 />
                </Grid.Column>
                <Grid.Column>
                    <Exp2 />
                </Grid.Column>
                <Grid.Column>
                    <Exp3 />
                </Grid.Column>
                </Grid>
            </Segment>
        </div>
    )
}

export default Body;