import React from "react";

export default function Homepage() {
    return (
        <div className="homepage-wrapper">
            <div className="homepage">
                <div className="title-wrapper">
                    <div className="title">
                        <h2>Homepage</h2>
                    </div>
                </div>
                <div className="photo-section-wrapper">
                    <div className="photo-section">
                        <>
                            big photo on the background with or without some
                            text on top
                        </>
                    </div>
                </div>
                <div className="options-section-wrapper">
                    <div className="options-section">
                        <>little photo with hover effect</>
                        <>little photo with hover effect</>
                        <>little photo with hover effect</>
                        <>little photo with hover effect</>
                    </div>
                </div>
            </div>
        </div>
    );
}
