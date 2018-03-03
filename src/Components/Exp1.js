import React from 'react';
import { Card, Icon, Feed } from 'semantic-ui-react';

const Exp1 = () => {
    return (
        <Card >
    <Card.Content>
      <Card.Header>Full-Stack Web Developer</Card.Header>
    </Card.Content>
    <Card.Content>
    <Feed>
        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
            Co-led the frontend development using JavaScript/jQuery/AJAX/Materialize for a location-based job search web application
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
            Developed the backend and database with Node.js, Express.js and MySQL for a web app to search for local dispensaries and their products
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
            Contributed to the full-stack development of various features for a gift-giving web app using React, Node.js, Express, MySQL and Semantic-UI
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
    )
}

export default Exp1;