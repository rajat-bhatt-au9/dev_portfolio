import React from 'react';

const Skillcard=({skill})=>


    <div className='col-lg-6'>
        <div className='skill-card'>
            <img src={skill.icon} alt='icon' className='skill-card-icon' />
            <div className='skill-card-body'>
                <h6 className='skill-card-title'>{skill.title}</h6>
                <p className='skill-card-content'>{skill.about}</p>
            </div>
        </div>
    </div>

export default Skillcard