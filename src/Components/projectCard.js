import React, { Component } from 'react';
import { Card, Icon, Image, Divider, Label } from 'semantic-ui-react';


export default class Portfolio extends Component {

    render() {
        return (

            <Card color='blue'>
            <Card.Content header={this.props.title} />
                <Image src={this.props.src}/>
                <Card.Content extra>
                <a href={this.props.git} target="_blank" rel="noopener noreferrer">
                    <Label>
                        <Icon name='github'  loading/>
                        GitHub
                    </Label>
                </a>
                <Icon name='plus' />
                <a href={this.props.demo} target="_blank" rel="noopener noreferrer">
                    <Label color='green'>
                        <Icon name='external'  />
                        Demo
                    </Label>
                </a>
                </Card.Content>
            </Card>
            
        )
    }
}
