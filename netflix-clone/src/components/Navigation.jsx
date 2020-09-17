import React from 'react';

import logo from '../assets/logo.png';

const Navigation = () => {

    return (
        <nav className="Navigation">
            <div className="nav-brand"><img src={logo} alt=""/></div>
            <ul className="nav-links nav-left-links">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>My List</li>
            </ul>
            <ul className="nav-links nav-right-links">
                <li><i class="fas fa-search"></i></li>
                <li>KIDS</li>
                <li>DVD</li>
                <li><i class="fas fa-gift"></i></li>
                <li><i class="far fa-bell"></i></li>
                <li className="nav-profile-img"><img src="https://img.wonderhowto.com/img/57/83/63427021252435/0/change-your-facebook-profile-picture-your-favorite-cartoon-character.w1456.jpg" alt=""/><i className="nav-profile-img2 fas fa-caret-down"></i></li>
            </ul>
        </nav>
    );
};
export default Navigation;