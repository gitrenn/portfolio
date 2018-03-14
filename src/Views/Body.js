import React from 'react';

import Portfolio from './Projects';
import About from './About';
import Experience from './Experience';
import Tech from './Tech';

import './Views.css';

const Body = () => {
    return (
        <div >
            <About />         
            <Portfolio />
            <Experience />
            <Tech /> 
        </div>
    )
}

export default Body;