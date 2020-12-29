import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import tie from '../assets/icons/tie.svg';
import pin from '../assets/icons/pin.svg';
import mightycoder from '../assets/mightycoder.svg'

const Sidebar =()=>{
    return(
        <div className='sidebar'>
            <img src={mightycoder} alt='avatar' className='sidebar-avatar'/>
            <div className='sidebar-name'>Rajat <span>Bhatt</span></div>
            <div className='sidebar-item sidebar-title'>Web Developer</div>
            <a href=''>
                <div className='sidebar-item sidebar-resume'>
                    <img src={tie} alt='resume' className='sidebar-icon'/>Download Resume
                </div>
            </a>
            <figure className='sidebar-social-icons my-2'>
            <a href=''><img src={facebook} alt='facebook' className='sidebar-icon mr-3' /></a>
            <a href=''><img src={instagram} alt='instagram' className='sidebar-icon' /></a>
            </figure>
            <div className='sidebar-contact'>
                <div className='sidebar-item sidebar-github'>
                    <a href=''><img src={github} alt='github' className='sidebar-icon mr-3' /> Github</a>
                </div>
                <div className='sidebar-location'><img src={pin} alt='location' className='sidebar-icon mr-3' />Dehradun, India</div>
                <div className='sidebar-item mt-3'>rajatbhatt500@gmail.com</div>
                <div className='sidebar-item'>9897924526/ 7017367973</div>
            </div>
            <div className='sidebar-item sidebar-email'>Email me</div>
        </div>
    )
}

export default Sidebar;