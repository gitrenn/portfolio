import React from 'react';
import { Icon, Container, Divider } from 'semantic-ui-react';

const Footer = () => {
    return (
      <div style={{background: '#2185d0'}}>
        <Container>
            
                    <a href='https://www.linkedin.com/in/ren-jing-2372b81b/' target="_blank"><Icon name='linkedin'  size='huge' color='white' inverted/></a>
                    <a href='https://github.com/gitrenn' target="_blank"><Icon name='github' size='huge' color='white' inverted loading/></a>
                    <a href="mailto:rjingmembers@gmail.com?Subject=Hello%20again" target="_top"><Icon name='mail' size='huge' color='white' inverted /></a>
    
            </Container>
        </div>
    )
}

export default Footer; 