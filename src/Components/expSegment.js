import React from 'react'; 
import { Segment, Grid, Icon } from 'semantic-ui-react';

const ExpSegment = () => {
    return (
                <Segment attached textAlign='center'>
                <Grid stackable columns={3}>
                    <Grid.Column>
                        <Grid.Row>
                        <Icon name='laptop' />    
                        </Grid.Row>
                        <Grid.Row>
                        <b>Coding Bootcamp UCI Continuing Education</b>  
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                        <Icon name='student' />    
                        </Grid.Row>
                        <Grid.Row>
                        <b>SIU Student Web Development Team</b>  
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                        <Icon name='hospital' />    
                        </Grid.Row>
                        <Grid.Row>
                        <b>Southern Illinois Healthcare</b>  
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
                </Segment>     
    )
}

export default ExpSegment;