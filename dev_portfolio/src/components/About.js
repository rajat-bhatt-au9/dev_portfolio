import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../assets/icons/api.svg';
import Skillcard from './Skillcard';

const About = () =>{

    const skills =[
        {
           icon: api,
           title: 'Lorem ipsum',
           about: 'Lorem ipsum is great is the meaning Lorem ipsum is great is the meaning',
        },
        {
            icon: api,
            title: 'Lorem ipsum',
            about: 'Lorem ipsum is great is the meaning Lorem ipsum is great is the meaning',
        },
        {
            icon: api,
            title: 'Lorem ipsum',
            about: 'Lorem ipsum is great is the meaning Lorem ipsum is great is the meaning',
         },
         {
            icon: api,
            title: 'Lorem ipsum',
            about: 'Lorem ipsum is great is the meaning Lorem ipsum is great is the meaning',
         },
         {
            icon: api,
            title: 'Lorem ipsum',
            about: 'Lorem ipsum is great is the meaning Lorem ipsum is great is the meaning',
         },
         {
            icon: api,
            title: 'Lorem ipsum',
            about: 'Lorem ipsum is great is the meaning Lorem ipsum is great is the meaning',
         },
    
    ]

    return(
        <div className='about'>
            <h6 className='about-intro'>
                Lorem impsum ghdk hwehj hkjd mbjhdkj mnfbjk fjbjfk  fejkfjmnbreu m,her ,jieg gkg gkf gkkgn.
            </h6>
            <div className='contanier about-container'>
                <h6 className='about-heading'>What I Offer</h6>
                <div className='row'>
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default About;