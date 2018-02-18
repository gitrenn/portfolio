import React from 'react';
import { Header, Grid, Image, Divider } from 'semantic-ui-react';
import Message from 'semantic-ui-react/dist/commonjs/collections/Message/Message';
import ProPic from '../ren_panda.jpg';


const Jumbotron = () => {
    return (
        <div>
            <Message>
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
                        <Header as='h2' icon textAlign='center' color='blue'>
                            Full-Stack Web Developer
                        </Header> 
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid>
            </Message>
        </div>
    )
}

export default Jumbotron;