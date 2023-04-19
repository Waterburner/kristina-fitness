import React from "react";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="left">
                    <div className="burger-wrapper">
                        <div className="burger">
                            {/* hamburger icon */}
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                    <div className="navlist-wrapper">
                        <div className="navlist">
                            <ul>
                                <NavLink
                                    className="navlink"
                                    to="/pages/schedule"
                                >
                                    <li>Schedule / Розклад тренувань</li>
                                </NavLink>

                                <NavLink
                                    className="navlink"
                                    to="/pages/aboutme"
                                >
                                    <li>About me / Про мене</li>
                                </NavLink>
                                <NavLink
                                    className="navlink"
                                    to="/pages/contacts"
                                >
                                    <li>Contacts / Kонтакти</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="logo">LOGO</div>
                </div>
            </div>
        </div>
    );
}
