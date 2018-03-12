import React from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';

import './Views.css';

const About = () => {
    return (
        <div className='bodySection'>
            <Segment attached='top' className='label-segment'>
            <Label ribbon color='blue'>About</Label>
            </Segment>
            <Segment attached='bottom'>
                <p>Passionate full-stack web developer with a degree in IT. Naturally curious and quick to learn and apply new technologies to develop better, faster and more efficient products. Business-focused with strong analytical and problem-solving skills.</p>
            </Segment>
        </div>
    )
}

export default About; 