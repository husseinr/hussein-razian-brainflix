import React from 'react';
import {Link} from 'react-router-dom';
import SiteLogo from '../../assets/Logo/Logo-brainflix.svg'
import UserLogo from '../../assets/Images/Mohan-muruge.jpg'
import './pageHeader.scss';

const PageHeader = () => {
    return (
        <header>
            <nav className="nav">
                <Link to="/" alt="site-logo">
                    <img className="nav__logo" src={SiteLogo} alt="site-logo"></img>
                </Link>
                <div className="nav-items">
                    <form className="nav-itmems__search" action="search">
                        <input className="nav-items__search-button" type="text" name="search" placeholder="Search"/>
                    </form>
                    <div className="nav-items__user">
                        <Link to="/upload" alt="upload-page"> 
                            <button className="nav-items__user-upload"> UPLOAD </button>
                        </Link>
                        <img className="nav-items__user-photo" src={UserLogo} alt="user-logo"></img>
                    </div>
                </div>
            </nav>
     </header>
    )}

export default PageHeader;