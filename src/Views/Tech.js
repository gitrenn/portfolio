import React, { Component } from 'react';
import { Segment, Label, Card } from 'semantic-ui-react';
import TechCard from '../Components/techCard';



export default class Teach extends Component {
    render() {
        return(
            <div className='bodySection'>
                <Segment attached='top' className='label-segment'>
                    <Label ribbon color='blue'>Technologies</Label>
                </Segment>
                <Segment attached='bottom'>
                    <Card.Group itemsPerRow={5}>
                    <TechCard />
                    </Card.Group>
                </Segment>
              
            </div>
        )
    }
}