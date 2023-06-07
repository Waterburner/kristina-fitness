import React from "react";

export default function ContactPage() {
    return (
        <div className="contacts-wrapper">
            <div className="contacts">
                <div className="contacts-wrapper section-wrapper">
                    <div className="contacts section">
                        <div className="description-wrapper">
                            <h3 className="description-header">Contacts</h3>
                            <p className="description">How to get in touch</p>
                        </div>
                        <div className="description-picture-wrapper">
                            <div className="description-picture">
                                <p className="phone-num">Phone: 123 123 1234</p>
                                <p className="email">kristina@fitness.com</p>
                                <p className="address">
                                    Gym located at: 123 Street name, City,
                                    Country
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
