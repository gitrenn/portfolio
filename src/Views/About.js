import React from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';



const About = (props) => {
    return (
        <div>
            <Segment vertical />
            <Segment attached='top'>
            <Label ribbon color='blue'>About</Label>
            </Segment>
            <Segment attached='bottom'>
            
                <p style={props.style}>Passionate full-stack web developer with a degree in IT. Naturally curious and quick to learn and apply new technologies to develop better, faster and more efficient products. Business-focused with strong analytical and problem-solving skills.</p>
            </Segment>
        </div>
    )
}

export default About; 