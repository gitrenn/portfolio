import React from 'react'; 
import { Segment, Grid, Label, Icon, Card } from 'semantic-ui-react';
import ExpSegment from '../Components/expSegment';
import Exp1 from '../Components/Exp1';
import Exp2 from '../Components/Exp2';
import Exp3 from '../Components/Exp3';

const Experience = () => {
    return (
        <div className='bodySection'>
            <Segment attached='top'><Label ribbon color='blue'>Experience</Label></Segment>
            <ExpSegment />
            <Segment attached='bottom'>
             
                <Card.Group>
                <Exp1 />
                <Exp2 />
                <Exp3 />
                </Card.Group>
  
            </Segment>    
        </div>
    )
}

export default Experience;