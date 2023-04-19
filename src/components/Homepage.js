import React from "react";

export default function Homepage() {
    return (
        <div className="homepage-wrapper">
            <div className="homepage">
                <div className="title-wrapper">
                    <div className="title">
                        <h2>Kristina Fitness Club</h2>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="photo-section section">
                        <>
                            big photo on the background with or without some
                            text on top
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
