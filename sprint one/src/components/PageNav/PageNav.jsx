import React from 'react';
import SiteLogo from '../../assets/Logo/Logo-brainflix.svg'
import UserLogo from '../../assets/Images/Mohan-muruge.jpg'
import './pageNav.scss';

const PageNav = () => {
    return (
        <header>
            <nav className="nav">
                <img className="nav__logo" src={SiteLogo} alt="site-logo"></img>
                <form className="nav__search" action="search">
                    <input className="nav__search-button" type="text" name="search" placeholder="Search"/>
                </form>
                <div className="nav__user">
                    <button className="nav__user-upload"> + UPLOAD </button>
                    <img className="nav__user-photo" src={UserLogo} alt="site-logo"></img>
                </div>
            </nav>
     </header>
    )}

export default PageNav;