import React from 'react';
import { Segment, Tab, Label, Icon, Grid, Card } from 'semantic-ui-react';
import Portfolio from './Projects';
import About from './About';
import Experience from './Experience';

import './Views.css';

const experience = [
    {
        menuItem: 'Experience', render: () => (
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
        )
    }
]

const Body = () => {
    return (
        <div>
            <About />         
            <Portfolio />
            <Experience />
          
        </div>
    )
}

export default Body;