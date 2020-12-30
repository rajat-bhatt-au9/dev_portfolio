import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{

    const [active, setActive] = useState('');
    useEffect(() => {
        let currURL = window.location.href;
        console.log(currURL);
        if(currURL.endsWith('/')) setActive('About')

        else if(currURL.endsWith('/projects')) setActive('Projects')
        
        else if(currURL.endsWith('/resume')) setActive('Resume')
    }, [active]);

    return(
        <div className='navbar'>
            <div className='navbar-active'>
                {active}
            </div>
            <div className='navbar-items'>

                {active !== 'About' && <Link to='/'><div className='navbar-item' onClick={()=>setActive('About')}>About </div></Link>
                }
                {active !== 'Resume' && <Link to='/resume'>
                <div className='navbar-item' onClick={()=>setActive('Resume')}>Resume</div>
                </Link>
                }
                {active  !== 'Projects' && <Link to='/projects'><div className='navbar-item' onClick={()=>setActive('Projects')}>Projects</div></Link>
                }
                 

            </div>
        </div>
    )
}

export default Navbar;