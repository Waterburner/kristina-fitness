import React from "react";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="left-wrapper">
                    <div className="left socialmedia">IG FB</div>
                </div>
                <div className="center-wrapper">
                    <div className="center copyright">
                        {" "}
                        2023 Oleh Kovelskyi. All rights reserved
                    </div>
                </div>

                <div className="right-wrapper">
                    <div className="right contacts">email, phone</div>
                </div>
            </div>
        </div>
    );
}
