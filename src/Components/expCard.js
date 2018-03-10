import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const ExpCard = (props) => {
    return (
        <Card>
            <Card.Header>
                {props.title}
            </Card.Header>
            <Card.Description>
                {props.content}
            </Card.Description>
        </Card>
    )
}

export default ExpCard;