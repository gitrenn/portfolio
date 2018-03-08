import React from 'react';
import { Header, Grid, Image, Divider, Segment } from 'semantic-ui-react';
import ProPic from '../Images/ren_panda.jpg';
import Navbar from './Navbar';

const Jumbotron = () => {
    return (
        <div>
            <Segment>
                <Grid stackable columns={4}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column >
                        <Image centered size='small' src={ProPic} circular/>
                        
                    </Grid.Column>
                    <Grid.Column>
                      <Header as='h1' icon textAlign='center' >
                            Ren Jing
                        </Header>
                        
                        <Divider section />
                        <Header as='h2' icon textAlign='center' >
                            <Navbar />
                        </Header> 
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid>
            </Segment>
        </div>
    )
}

export default Jumbotron;