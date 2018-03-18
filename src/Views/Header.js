import React from 'react';
import { Header, Grid, Image, Segment, Button, Icon } from 'semantic-ui-react';
import { animateScroll as scroll } from 'react-scroll';
import ProPic from '../Images/ren_panda.jpg';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/sidebar';

import './Views.css'

class MyHeader extends React.Component {

    scrollToTop = () => {
        scroll.scrollToTop();
      }

    render() {
        return (
            <div>
                <Segment>
                    <Grid>
                        <Grid.Row centered columns={4} only='computer'>
                            <Grid.Column></Grid.Column>
                            <Grid.Column >
                                <a onClick={this.scrollToTop}>
                                    <Image centered size='small' src={ProPic} circular/>
                                </a>                                                            
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h1' icon textAlign='center' >
                                    <Button animated='fade' inverted size='large'>
                                        <a onClick={this.scrollToTop}>
                                        <Button.Content visible className='head'>Ren Jing</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='home' size='small' />
                                        </Button.Content>
                                        </a>
                                    </Button>
                                </Header>                                
                               
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
                                    <a onClick={this.scrollToTop}><b>RJ</b></a>
                                </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default MyHeader;