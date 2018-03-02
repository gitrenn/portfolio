import React from 'react';
import { Header, Grid, Image, Divider, Segment } from 'semantic-ui-react';
import ProPic from '../ren_panda.jpg';


const Jumbotron = () => {
    return (
        <div style={{background: '#2185d0'}}>
            <Segment vertical styles={{padding: '8em 0em'}}>
                <Grid stackable columns={4}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column >
                        <Image centered size='small' src={ProPic} circular/>
                        
                    </Grid.Column>
                    <Grid.Column>
                      <Header as='h1' icon textAlign='center' style={{color:'white', textTransform:'uppercase'}}>
                            Ren Jing
                        </Header>
                        <Divider section />
                        <Header as='h2' icon textAlign='center' style={{color:'white'}}>
                            Full-Stack Web Developer
                        </Header> 
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid>
            </Segment>
        </div>
    )
}

export default Jumbotron;