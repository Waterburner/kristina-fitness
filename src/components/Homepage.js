import React from "react";

import { NavLink } from "react-router-dom";

export default function Homepage() {
    return (
        <div className="homepage-wrapper">
            <div className="homepage">
                <div className="title-wrapper">
                    <div className="title">
                        <h2 className="english_language">
                            Kristina Fitness Club
                        </h2>
                        <h2 className="ukrainian_language">
                            Крістіна Фітнес клуб
                        </h2>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="photo-section section">
                        <h3 className="photo-title english_language">
                            Kristina Online/Offline trainer <b />
                        </h3>
                        <h3 className="photo-title ukrainian_language">
                            Крістіна тренер онлайн/офлайн
                        </h3>

                        <p className="photo-description english_language">
                            Training without damaging your health. Educational
                            and reabilitational. Over 200 satisfied clients
                        </p>

                        <p className="photo-description ukrainian_language">
                            тут про тренування без шкоди здоров’ю!
                            Освіта-реабілітолог | Майстер спорту 🇺🇦 8 років
                            досвіду | 200+ задоволених клієнтів
                        </p>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="options-section section">
                        <NavLink className="navlink" to="/pages/aboutme">
                            <div className="photo1 options-photos">
                                <p className="photo-description english_language">
                                    About Kristina
                                </p>
                                <p className="photo-description ukrainian_language">
                                    Про Крістіну
                                </p>
                                <p className="photo-sub-description english_language">
                                    Achivments, education, experience…
                                </p>
                                <p className="photo-sub-description ukrainian_language">
                                    Досягнення, навчання, досвід
                                </p>
                            </div>
                        </NavLink>
                        <NavLink className="navlink" to="/pages/schedule">
                            <div className="options-photos photo2">
                                <p className="photo-description english_language">
                                    Schedule
                                </p>
                                <p className="photo-description ukrainian_language">
                                    Розклад занять
                                </p>
                                <p className="photo-sub-description english_language">
                                    When, where and how
                                </p>
                                <p className="photo-sub-description ukrainian_language">
                                    Коли, де і як відбуваються тренування
                                </p>
                            </div>
                        </NavLink>
                        <NavLink className="navlink" to="/blog">
                            <div className="options-photos photo3">
                                <p className="photo-description english_language">
                                    Blog
                                </p>
                                <p className="photo-description ukrainian_language">
                                    Блог
                                </p>
                                <p className="photo-sub-description english_language">
                                    Motivation, diet, health choices
                                </p>
                                <p className="photo-sub-description ukrainian_language">
                                    Мотивація, діяти та про здоров'я
                                </p>
                            </div>
                        </NavLink>
                        <NavLink className="navlink" to="/pages/contacts">
                            <div className="options-photos photo4">
                                <p className="photo-description english_language">
                                    Contacts
                                </p>
                                <p className="photo-description ukrainian_language">
                                    Контакти
                                </p>
                                <p className="photo-sub-description english_language">
                                    Phone: 123 546 7890
                                    <br />
                                    email and address
                                    <br />
                                    <br />
                                    How to connect
                                </p>
                                <p className="photo-sub-description ukrainian_language">
                                    телефон: 123 456 7890
                                    <br />
                                    емейл та адреса
                                    <br />
                                    <br />
                                    Інформація про зв'язок
                                </p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="section review-section">
                        <div className="reviews">
                            <h3 className="review-title">Name</h3>
                            <p className="review-description">
                                Review: Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Cupiditate laboriosam debitis
                                dolor et cumque ullam fuga suscipit iusto porro
                                fugiat dicta, quod, neque velit molestiae
                                obcaecati quisquam reprehenderit ad quos magnam!
                                Quos?
                            </p>
                        </div>
                        <div className="reviews">
                            <h3 className="review-title">Name</h3>
                            <p className="review-description">
                                Review: Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nostrum itaque, ipsum minima
                                ut natus commodi, fugiat quidem id incidunt
                                accusamus hic inventore alias animi!
                            </p>
                        </div>
                        <div className="reviews">
                            <h3 className="review-title">Name</h3>
                            <p className="review-description">
                                Review: Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quod adipisci eaque, at
                                explicabo blanditiis nulla necessitatibus nisi
                                cum.
                            </p>
                        </div>

                        <div className="reviews">
                            <NavLink
                                className="navlink reviews-link"
                                to="/reviews/"
                            >
                                <h3 className="more-reviews">More reviews…</h3>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
