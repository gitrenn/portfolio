import React from 'react';
import { Card, Icon, Feed } from 'semantic-ui-react';

const Exp3 = () => {
    return (
        <Card fluid>
    <Card.Content>
      <Card.Header>Web Application Developer</Card.Header>
    </Card.Content>
    <Card.Content>
    <Feed>
        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
          Collaborated with teammates to plan and execute projects using Agile Scrum methodologies for clients
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
          Contributed to the backend development of a new website for Ascend at SIU, using C# and .Net Core to build the environment, Git for version control, and VisualStudioTeamServices for team collaboration
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <Icon name='add' />
          </Feed.Label>
          <Feed.Content>
          Designed a new website for the Dental Hygiene department with WordPress, produced user manuals, and performed training on the website’s new functionalities
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
    )
}

export default Exp3;