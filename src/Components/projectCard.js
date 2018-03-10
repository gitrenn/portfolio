import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


export default class Portfolio extends Component {

    render() {
        return (

            <Card color='blue'>
                <Card.Header>
                    {this.props.title}
                </Card.Header>
                <Image src={this.props.src}/>
                <Card.Content>
                <Card.Description>
                    
                </Card.Description>
                <Card.Description>
                    <a href={this.props.git} target="_blank"><Icon name='github'  loading/></a>
                    <a href={this.props.demo} target="_blank"><Icon name='external'  /></a>
                </Card.Description>
                </Card.Content>
            </Card>
            
        )
    }
}
