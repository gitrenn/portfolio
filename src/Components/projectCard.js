import React, { Component } from 'react';
import { Card, Icon, Image, Dropdown, Label, Segment } from 'semantic-ui-react';


export default class Portfolio extends Component {

    render() {
        return (

            <Card color='blue'>
            <Image src={this.props.src}/>
                <Card.Content>
                <Dropdown text={this.props.title} labeled button>
                    <Dropdown.Menu>
                    <Dropdown.Header icon='idea' content={this.props.desc} />
                    <Dropdown.Divider />
                        <Segment vertical>
                            <Icon name='code' />
                            {this.props.tech}
                        </Segment>
                    </Dropdown.Menu>
                </Dropdown>
                </Card.Content>
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
