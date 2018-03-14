import React from 'react';
import { Header, Grid, Image, Divider, Segment } from 'semantic-ui-react';
import ProPic from '../Images/ren_panda.jpg';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/sidebar';


const MyHeader = () => {
    return (
        <div>
            <Segment>
                <Grid>
                    <Grid.Row centered columns={4} only='computer'>
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
                    </Grid.Row>
                    <Grid.Row columns={2} only='tablet mobile'>
                            <Grid.Column textAlign='left'>
                                <Sidebar />
                            </Grid.Column>
                            <Grid.Column textAlign='right'>
                            <a href='#'>RJ</a>
                            </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default MyHeader;