import React from 'react';
import { Segment, Tab, Label, Icon, Grid, Card } from 'semantic-ui-react';
import Exp1 from '../Components/Exp1';
import Exp2 from '../Components/Exp2';
import Exp3 from '../Components/Exp3';
import Portfolio from './Projects';

import cannabuddy from '../Images/cannabuddy.png';
import codeJob from '../Images/codeJob.png';
import crystalCollector from '../Images/crystalCollector.png';
import gifTastic from '../Images/gifTastic.png';
import giftReview from '../Images/giftReview.png';

const about = [
    {
        menuItem: 'About Me', render: () => <Tab.Pane><Label ribbon color='blue'></Label><p>
            Passionate full-stack web developer with a degree in IT. Naturally curious and quick to learn and apply new technologies to develop better, faster and more efficient products. Business-focused with strong analytical and problem-solving skills.
        </p></Tab.Pane>
    },

]

const portfolio = [
    { menuItem: 'Portfolio', render: () => (
        <Tab.Pane>
            <Label ribbon color='blue' />
            <Grid stackable columns={5}>
                <Grid.Column>    
                    <Portfolio 
                        canna_title='CannaBuddy'
                        canna_src={cannabuddy}
                        canna_git='https://github.com/Tech-Creme-Brulee/Creme-Brulee-Project'
                        canna_demo='https://cannabuddy.herokuapp.com/'/>
                </Grid.Column>
                <Grid.Column>
                <Portfolio 
                        canna_title='CrystalGame'
                        canna_src={crystalCollector}
                        canna_git='https://github.com/Tech-Creme-Brulee/CrystalsCollectorGame'
                        canna_demo='https://cannabuddy.herokuapp.com/'/>
                </Grid.Column>
                <Grid.Column>
                <Portfolio 
                        canna_title='GiftReview'
                        canna_src={giftReview}
                        canna_git='https://github.com/gitrenn/wishlist_product_review'
                        canna_demo='https://gitrenn.github.io/wishlist_product_review/'/>
                </Grid.Column>
                <Grid.Column>
                <Portfolio 
                        canna_title='GifTastic'
                        canna_src={gifTastic}
                        canna_git='https://github.com/gitrenn/GifTastic'
                        canna_demo='https://gitrenn.github.io/GifTastic/'/>
                </Grid.Column>
                <Grid.Column>
                <Portfolio 
                        canna_title='CodeJob'
                        canna_src={codeJob}
                        canna_git='https://github.com/safemoveapp/code-job-app'
                        canna_demo='https://safemoveapp.github.io/code-job-app/'/>
                </Grid.Column>
                </Grid>
            
        </Tab.Pane>
    ) }
]

const experience = [
    {
        menuItem: 'Experience', render: () => (
            <Tab.Pane>
                <Label ribbon color='blue' />
                <Grid stackable columns={3}>
                    <Grid.Column>
                        <Icon name='laptop'>
                            <p>Coding Bootcamp UCI Continuing Education</p>
                        </Icon>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='student'>
                            <p>SIU Student Web Development Team</p>
                        </Icon>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='hospital'>
                            <p>Southern Illinois Healthcare</p>
                        </Icon>
                    </Grid.Column>
                </Grid>
            </Tab.Pane>
        )
    }
]

const Body = () => {
    return (
        <div>
            {/* <Segment vertical>
                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={about} />
            </Segment>
             */}
            
            <Segment attached='top' style={{marginTop:'40px'}}><Label ribbon color='blue'>Projects</Label></Segment>
            <Segment attached>
            <Grid stackable columns={5}>
                <Grid.Column>    
                    <Portfolio 
                        canna_title='CannaBuddy'
                        canna_src={cannabuddy}
                        canna_git='https://github.com/Tech-Creme-Brulee/Creme-Brulee-Project'
                        canna_demo='https://cannabuddy.herokuapp.com/'/>
                </Grid.Column>
                <Grid.Column>
                <Portfolio 
                        canna_title='CrystalGame'
                        canna_src={crystalCollector}
                        canna_git='https://github.com/Tech-Creme-Brulee/CrystalsCollectorGame'
                        canna_demo='https://cannabuddy.herokuapp.com/'/>
                </Grid.Column>
                <Grid.Column>
                <Portfolio 
                        canna_title='GiftReview'
                        canna_src={giftReview}
                        canna_git='https://github.com/gitrenn/wishlist_product_review'
                        canna_demo='https://gitrenn.github.io/wishlist_product_review/'/>
                </Grid.Column>
                <Grid.Column>
                <Portfolio 
                        canna_title='GifTastic'
                        canna_src={gifTastic}
                        canna_git='https://github.com/gitrenn/GifTastic'
                        canna_demo='https://gitrenn.github.io/GifTastic/'/>
                </Grid.Column>
                <Grid.Column>
                <Portfolio 
                        canna_title='CodeJob'
                        canna_src={codeJob}
                        canna_git='https://github.com/safemoveapp/code-job-app'
                        canna_demo='https://safemoveapp.github.io/code-job-app/'/>
                </Grid.Column>
                </Grid>
            </Segment>
             
            <Segment vertical>
                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={experience} />
                <Segment>
                {/* <Grid stackable columns={3}>
                <Grid.Column>    
                    <Exp1 />
                </Grid.Column>
                <Grid.Column>
                    <Exp2 />
                </Grid.Column>
                <Grid.Column>
                    <Exp3 />
                </Grid.Column>
                </Grid> */}
                <Card.Group>
                    <Exp1 />
                    <Exp2 />
                    <Exp3 />
                </Card.Group>
                </Segment>
            </Segment>
        </div>
    )
}

export default Body;