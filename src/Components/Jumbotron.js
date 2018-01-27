import React from 'react';
import { Grid, Message, Header, Button } from 'semantic-ui-react';

const Jumbotron = () => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Message>
                        <Header as='h1'>Hello, world!</Header>
                        <p>
                            This is a template for a simple marketing or informational website. It includes a large callout called a
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
            unique.
          </p>
                        <Button color='blue'>Learn more &raquo;</Button>
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Jumbotron;