import React from 'react';
import { Icon, Segment, List, Container, Grid, Header, Responsive } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Responsive>
        <Segment inverted color='blue' vertical style={{ padding: '2em 0em', marginTop: '4em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Header inverted as='h3' content='Connect' />
                            <List size="large" link inverted>

                                <List.Item><a href='https://www.linkedin.com/in/ren-jing-2372b81b/' target='_blank' rel="noopener noreferrer">
                                    <Icon name='linkedin square'>
                                    </Icon>Ren Jing</a></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header inverted as='h3' content='Contact' />
                            <List size="large" link inverted>
                                <List.Item><a href='https://github.com/gitrenn' target='_blank' rel="noopener noreferrer">
                                    <Icon name='github' inverted loading>
                                    </Icon>gitrenn</a></List.Item>
                                <List.Item><a href='mailto:gitrenn@gmail.com?Subject=Hello%20again' target='_blank' rel="noopener noreferrer">
                                    <Icon name='mail' inverted>
                                    </Icon>gitrenn@gmail.com</a></List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header as='h3' inverted style={{ verticalAlign: "center" }}> &copy; 2018 Ren Jing</Header>
                            <List size="large" link inverted>
                                <List.Item><a href='https://reactjs.org/' target='_blank' rel="noopener noreferrer">
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