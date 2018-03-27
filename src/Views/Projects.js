import React, { Component } from 'react';
import { Card, Label, Segment, Responsive } from 'semantic-ui-react';
import ProjectCard from '../Components/projectCard';
import cannabuddy from '../Images/cannabuddy.png';
import codeJob from '../Images/codeJob.png';
import crystalCollector from '../Images/crystalCollector.png';
import gifTastic from '../Images/gifTastic.png';
import giftReview from '../Images/giftReview.png';
import eat from '../Images/eat.png';

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
                            demo='https://cannabuddy.herokuapp.com/'
                            desc='Find that cannabis for you'
                            tech='JavaScript, jQuery, Nodejs, MySQL, HTML, CSS, AJAX, Materialize'/>
                            
                    
                        <ProjectCard 
                                title='CrystalGame'
                                src={crystalCollector}
                                git='https://github.com/gitrenn/CrystalsCollectorGame'
                                demo='https://cannabuddy.herokuapp.com/'
                                desc='A game of arithmetic'
                                tech='JavaScript, jQuery, HTML, CSS, Bootstrap'/>
                        
                        <ProjectCard 
                                title='GiftReview'
                                src={giftReview}
                                git='https://github.com/gitrenn/wishlist_product_review'
                                demo='https://gitrenn.github.io/wishlist_product_review/'
                                desc='Review before you buy it'
                                tech='React, Semantic-ui, YouTubeAPI'/>
                        
                        <ProjectCard 
                                title='GifTastic'
                                src={gifTastic}
                                git='https://github.com/gitrenn/GifTastic'
                                demo='https://gitrenn.github.io/GifTastic/'
                                desc='Generate the gifs you want'
                                tech='JavaScript, jQuery, HTML, CSS, Bootstrap, AJAX'/>
                        
                        <ProjectCard 
                                title='CodeJob'
                                src={codeJob}
                                git='https://github.com/safemoveapp/code-job-app'
                                demo='https://safemoveapp.github.io/code-job-app/'
                                desc='Locate that code job'
                                tech='JavaScript, jQuery, Nodejs, HTML, CSS, AJAX, Materialize'/>

                        <ProjectCard 
                                title='EatSentialSmart'
                                src={eat}
                                git='https://github.com/safemoveapp/code-job-app'
                                demo='https://eatsentialsmart.herokuapp.com/'
                                desc='Search For Recipe/Restaurant/HowToVideos'
                                tech='React, Axios, Semantic-UI, Edamam/Zomato/NYT APIs'/>
                    </Card.Group>
                </Responsive>
            </div>
        )
    }
}
