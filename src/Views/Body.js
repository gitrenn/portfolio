import React from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import Portfolio from './Projects';
import About from './About';
import Experience from './Experience';
import Tech from './Tech';

import './Views.css';

class Body extends React.Component {
    render() {
        return (
            <div >
                <Element 
                    name='about'
                    style={{ marginBottom: 30}}>         
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