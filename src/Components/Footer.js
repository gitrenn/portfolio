import React from 'react';
import { Icon, Container } from 'semantic-ui-react';

const Footer = () => {
    return (
      <div style={{background: '#2185d0'}}>
        <Container>
            <a href='https://www.linkedin.com/in/ren-jing-2372b81b/' target="_blank" rel="noopener noreferrer"><Icon name='linkedin'  size='big' color='white' inverted/></a>
            <a href='https://github.com/gitrenn' target="_blank" rel="noopener noreferrer"><Icon name='github' size='big' color='white' inverted loading/></a>
            <a href="mailto:rjingmembers@gmail.com?Subject=Hello%20again" target="_top" rel="noopener noreferrer"><Icon name='mail' size='big' color='white' inverted /></a>
        </Container>
        </div>
    )
}

export default Footer; 