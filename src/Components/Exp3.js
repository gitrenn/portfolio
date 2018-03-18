import React from 'react';
import { Card, Icon, Feed } from 'semantic-ui-react';

const Exp2 = () => {
    return (
        <Card >
    <Card.Content textAlign='center'>
      <Card.Header>Business Intelligence Intern</Card.Header>
    </Card.Content>
    <Card.Content>
    <Feed>
        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
          Supported BI analysts in the development of BI infrastructure, delivering customized solutions for customers within the healthcare environment
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
          Created geo-analytical applications using QlikView, Idevio map and Google Map API in a test environment, allowing doctors to evaluate correlations between patient diagnostics and place of residence
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
          Deployed part of the tracking systems for medical devices linked to the EMR System
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
    )
}

export default Exp2;