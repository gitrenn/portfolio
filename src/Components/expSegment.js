import React from 'react'; 
import { Segment, Grid, Label, Icon } from 'semantic-ui-react';

const ExpSegment = () => {
    return (
                <Segment attached>
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
                </Segment>     
    )
}

export default ExpSegment;