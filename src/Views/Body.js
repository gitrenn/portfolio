import React from 'react';
import { Element } from 'react-scroll';

import Portfolio from './Projects';
import About from './About';
import Experience from './Experience';
import Tech from './Tech';

import './Views.css';

class Body extends React.Component {
    render() {
        return (
            <div >
                <Element name='about'>         
                    <About />
                </Element>
                <Element name='projects'>         
                    <Portfolio />
                </Element>
                <Element name='experience'>         
                    <Experience />
                </Element>
                <Element name='tech'>         
                    <Tech />
                </Element>
            </div>
        )
    }
}

export default Body;