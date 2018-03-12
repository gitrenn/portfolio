import React, { Component } from 'react'; 
import { Segment, Label, Card, Responsive } from 'semantic-ui-react';
import ExpSegment from '../Components/expSegment';
import Exp1 from '../Components/Exp1';
import Exp2 from '../Components/Exp2';
import Exp3 from '../Components/Exp3';
import './Views.css';


class Experience extends Component {
    state = {}

    handleOnUpdate = (e, { width }) => this.setState({ width })

    render(){
        const { width } = this.state;
        const itemsPerRow = width >= Responsive.onlyComputer.minWidth ? 3 : 1;
        return (
            <div className='bodySection'>
                <Segment attached='top' className='label-segment'>
                    <Label ribbon color='blue'>Experience</Label>
                </Segment>
                <ExpSegment />
                <Responsive
                    as={Segment}
                    attached='bottom'
                    fireOnMount
                    onUpdate={this.handleOnUpdate}> 
                    <Card.Group itemsPerRow={itemsPerRow}>
                        <Exp1 />
                        <Exp2 />
                        <Exp3 />
                    </Card.Group>
                </Responsive>
            </div>
        )
    }
}

export default Experience;