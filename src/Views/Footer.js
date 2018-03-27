import React from 'react';
import { Icon, Segment, List, Container, Grid, Header, Responsive } from 'semantic-ui-react';

const Footer = () => {
    return (
    //   <div style={{background: '#2185d0'}}>
    //     <Segment vertical textAlign='center'>   
    //         <a href='https://www.linkedin.com/in/ren-jing-2372b81b/' target="_blank" rel="noopener noreferrer"><Icon name='linkedin'  size='huge' color='grey' inverted/></a>
    //         <a href='https://github.com/gitrenn' target="_blank" rel="noopener noreferrer"><Icon name='github' size='huge' color='grey' inverted loading/></a>
    //         <a href="mailto:rjingmembers@gmail.com?Subject=Hello%20again" target="_top" rel="noopener noreferrer"><Icon name='mail' size='huge' color='grey' inverted /></a>
    //     </Segment>
    //     </div>
        <Responsive>
        <Segment inverted color='blue' vertical style={{ padding: '2em 0em', marginTop: '4em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Header inverted as='h3' content='Contributors' />
                            <List size="large" link inverted>

                                <List.Item as='a'><a href='https://www.linkedin.com/in/ren-jing-2372b81b/' target='_blank' rel="noopener noreferrer">
                                    <Icon name='linkedin square'>
                                    </Icon>Ren Jing</a></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header inverted as='h3' content='Contact' />
                            <List size="large" link inverted>
                                <List.Item as='a'><a href='https://github.com/gitrenn' target='_blank' rel="noopener noreferrer">
                                    <Icon name='github' inverted loading>
                                    </Icon>gitrenn</a></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header as='h3' inverted style={{ verticalAlign: "center" }}>© 2018 Ren</Header>
                            <List size="large" link inverted>
                                <List.Item as='a'><a href='https://reactjs.org/' target='_blank' rel="noopener noreferrer">
                                    <Icon name='code' >
                                    </Icon>React</a></List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </Responsive>
    )
}

export default Footer; 