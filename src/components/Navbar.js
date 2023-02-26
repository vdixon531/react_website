import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar(){
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Valmik Dixon <i className='fab.fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click? 'fas fa-times':'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                                Work Experience
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/music' className='nav-links' onClick={closeMobileMenu}>
                                Music
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/adventure' className='nav-links' onClick={closeMobileMenu}>
                                Adventure
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/contact-me' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact me
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>CONTACT ME</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;