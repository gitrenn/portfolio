import React from 'react';
import { Card, Icon, Link } from 'semantic-ui-react';

const description = [
    'Ren is a passionate full-stack web developer with a B.S. in IT.',
    'Experienced ',
  ].join(' ')

const Bio = () => {
    return (
        <Card fluid>
    <Card.Content description={description} />
    <Card.Content extra>
      <a href='https://www.linkedin.com/in/ren-jing-2372b81b/'><Icon name='linkedin' /></a>
      <Icon name='github' />
      <Icon name='mail' /> rjingmembers@gmail.com
    </Card.Content>
  </Card>
    )
}

export default Bio;