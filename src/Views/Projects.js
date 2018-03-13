import React, { Component } from 'react';
import { Card, Label, Segment, Responsive } from 'semantic-ui-react';
import ProjectCard from '../Components/projectCard';
import cannabuddy from '../Images/cannabuddy.png';
import codeJob from '../Images/codeJob.png';
import crystalCollector from '../Images/crystallCollector.png';
import gifTastic from '../Images/gifTastic.png';
import giftReview from '../Images/giftReview.png';

import './Views.css';



export default class Portfolio extends Component {
    state = {};

    handleOnUpdate = (e, { width }) => this.setState({ width });

    render() {
        const { width } = this.state;
        const itemsPerRow = width >= Responsive.onlyComputer.minWidth ? 3 : 1;

        return (
            <div className='bodySection'>
                <Segment attached='top' className='label-segment'>
                    <Label ribbon color='blue'>Projects</Label>
                </Segment>
                <Responsive 
                    as={Segment}
                    attached='bottom'
                    fireOnMount
                    onUpdate={this.handleOnUpdate}>
                    <Card.Group itemsPerRow={itemsPerRow}>
                        <ProjectCard 
                            title='CannaBuddy'
                            src={cannabuddy}
                            git='https://github.com/Tech-Creme-Brulee/Creme-Brulee-Project'
                            demo='https://cannabuddy.herokuapp.com/'/>
                    
                        <ProjectCard 
                                title='CrystalGame'
                                src={crystalCollector}
                                git='https://github.com/gitrenn/CrystalsCollectorGame'
                                demo='https://cannabuddy.herokuapp.com/'/>
                        
                        <ProjectCard 
                                title='GiftReview'
                                src={giftReview}
                                git='https://github.com/gitrenn/wishlist_product_review'
                                demo='https://gitrenn.github.io/wishlist_product_review/'/>
                        
                        <ProjectCard 
                                title='GifTastic'
                                src={gifTastic}
                                git='https://github.com/gitrenn/GifTastic'
                                demo='https://gitrenn.github.io/GifTastic/'/>
                        
                        <ProjectCard 
                                title='CodeJob'
                                src={codeJob}
                                git='https://github.com/safemoveapp/code-job-app'
                                demo='https://safemoveapp.github.io/code-job-app/'/>
                    </Card.Group>
                </Responsive>
            </div>
        )
    }
}
