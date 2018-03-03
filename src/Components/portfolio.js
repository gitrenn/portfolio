import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import cannabuddy from '../Images/cannabuddy.png';
import codeJob from '../Images/codeJob.png';
import crystalCollector from '../Images/crystalCollector.png';
import gifTastic from '../Images/gifTastic.png';
import giftReview from '../Images/giftReview.png';

export default class Portfolio extends Component {
    

    render() {
        return (
            <Card>
                <Image src={this.props.canna_src}/>
                <Card.Content>
                <Card.Description>
                    {this.props.canna_title}
                </Card.Description>
                <Card.Description>
                    <a href={this.props.canna_git} target="_blank"><Icon name='github'  loading/></a>
                    <a href={this.props.canna_demo} target="_blank"><Icon name='external'  /></a>
                </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}
