import React, { Component } from 'react';
import { Segment, Label, Card, Image } from 'semantic-ui-react';

import js from '../Images/Tech/javascript.png';
import html from '../Images/Tech/html.png';
import css from '../Images/Tech/css.jpg';
import java from '../Images/Tech/java.png';
import reactSrc from '../Images/Tech/react.jpg';
import express from '../Images/Tech/express.jpg';
import jquery from '../Images/Tech/jquery.png';
import node from '../Images/Tech/nodejs.png';
import mongo from '../Images/Tech/mongodb.jpg';
import sui from '../Images/Tech/semanticui.png';
import bs from '../Images/Tech/bootstrap.png';

const TechList = [
    {title: 'JavaScript', src: js },
    {title: 'HTML', src: html },
    {title: 'CSS', src: css },
    {title: 'MongoBD', src:mongo },
    {title: 'Express', src: express },
    {title: 'React', src: reactSrc },
    {title: 'Node', src: node },
    {title: 'Java', src: java },
    {title: 'Semantic-UI', src: sui },
    {title: 'Bootstrap', src: bs }
]



const TechCard =() => {
    const card = TechList.map( item => {
        return (
            <Card key={item.title}>
               <Image src={item.src} />
            </Card>
        )
    });

    return card;
}

export default TechCard;