import React from "react";

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
                        <>
                            <>
                                <h3 className="photo-title english_language">
                                    Kristina Online/Offline trainer <b />
                                </h3>
                                <h3 className="photo-title ukrainian_language">
                                    Крістіна тренер онлайн/офлайн
                                </h3>
                            </>
                            <>
                                <p className="photo-description english_language">
                                    Training without damaging your health.
                                    Educational and reabilitational. Over 200
                                    satisfied clients
                                </p>

                                <p className="photo-description ukrainian_language">
                                    тут про тренування без шкоди здоров’ю!
                                    Освіта-реабілітолог | Майстер спорту 🇺🇦 8
                                    років досвіду | 200+ задоволених клієнтів
                                </p>
                            </>
                        </>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="options-section section">
                        <>little photo with hover effect</>
                        <>little photo with hover effect</>
                        <>little photo with hover effect</>
                        <>little photo with hover effect</>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="section review-section">
                        <div className="reviews">Review#1</div>
                        <div className="reviews">Review#2</div>
                        <div className="reviews">Review#3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
