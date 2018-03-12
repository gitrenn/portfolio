import React from 'react';

import Portfolio from './Projects';
import About from './About';
import Experience from './Experience';

import './Views.css';

const Body = () => {
    return (
        <div >
            <About />         
            <Portfolio />
            <Experience /> 
        </div>
    )
}

export default Body;