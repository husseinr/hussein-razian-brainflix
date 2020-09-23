import React from 'react';
import {Link} from 'react-router-dom'
import SiteLogo from '../../assets/Logo/Logo-brainflix.svg'
import UserLogo from '../../assets/Images/Mohan-muruge.jpg'
import './pageHeader.scss';

const PageHeader = () => {
    return (
        <header>
            <nav className="nav">
                <a href="../../../public/index.html" alt="site-logo">
                    <img className="nav__logo" src={SiteLogo} alt="site-logo"></img>
                </a>
                <form className="nav__search" action="search">
                    <input className="nav__search-button" type="text" name="search" placeholder="Search"/>
                </form>
                <div className="nav__user">
                    <Link to="/upload"> 
                        <button className="nav__user-upload"> UPLOAD </button>
                    </Link>
                    <img className="nav__user-photo" src={UserLogo} alt="user-logo"></img>
                </div>
            </nav>
     </header>
    )}

export default PageHeader;