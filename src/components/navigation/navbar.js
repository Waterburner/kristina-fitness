import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="left">
                    <div className="burger-wrapper">
                        <div className="burger">=</div>
                    </div>
                    <div className="navlist-wrapper">
                        <div className="navlist">
                            <ul>
                                <NavLink to="/pages/schedule">
                                    <li>Schedule / Розклад тренувань</li>
                                </NavLink>

                                <NavLink to="/pages/aboutme">
                                    <li>About me / Про мене</li>
                                </NavLink>
                                <NavLink to="/pages/contacts">
                                    <li>Contacts / Kонтакти</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="center"></div>
                <div className="right">
                    <div className="logo-wrapper">
                        <div className="logo">LOGO</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
