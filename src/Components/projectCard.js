import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


export default class Portfolio extends Component {

    render() {
        return (

            <Card color='blue'>
            <Card.Content header={this.props.title} />
            
                <Image src={this.props.src}/>
                <Card.Content extra>
                    <a href={this.props.git} target="_blank" rel="noopener noreferrer"><Icon name='github'  loading/></a>
                    <a href={this.props.demo} target="_blank" rel="noopener noreferrer"><Icon name='external'  /></a>
                </Card.Content>
            </Card>
            
        )
    }
}
