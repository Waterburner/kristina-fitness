import React from "react";

export default function AboutPage() {
    return (
        <div className="about-wrapper">
            <div className="about">
                <div className="about-me-wrapper section-wrapper">
                    <div className="about-me section">
                        <div className="description-wrapper">
                            <h3 className="description-header">
                                About Kristina
                            </h3>
                            <p className="description">
                                Titles, education, experiences
                            </p>
                        </div>
                        <div className="description-picture-wrapper">
                            <div className="description-picture">
                                cool photo header <br />
                                <ul className="description-list">
                                    <li className="description-list-item">
                                        European champion at Kyokushin karate
                                    </li>
                                    <li className="description-list-item">
                                        Ukrainian champion at Kyokushin karate
                                    </li>
                                    <li className="description-list-item">
                                        Bachelor degree in sports
                                    </li>
                                    <li className="description-list-item">
                                        Bachelor degree in Law
                                    </li>
                                    <li className="description-list-item">
                                        Karate practitioner since 2003
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="what-we-do section">pictures etc, idk</div>
                </div>
            </div>
        </div>
    );
}
