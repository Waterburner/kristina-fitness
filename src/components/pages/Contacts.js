import React from "react";

export default function ContactPage() {
    return (
        <div className="contacts-wrapper">
            <div className="contacts">
                <div className="contacts-wrapper section-wrapper">
                    <div className="contacts section">
                        <div className="description-wrapper">
                            <h3 className="description-header english_language">
                                Contacts
                            </h3>
                            <h3 className="description-header ukrainian_language">
                                Контакти
                            </h3>
                            <p className="description english_language">
                                How to get in touch
                            </p>
                            <p className="description ukrainian_language">
                                Як зв'язатися
                            </p>
                        </div>
                        <div className="description-picture-wrapper">
                            <div className="description-picture">
                                <p className="phone-num english_language">
                                    Phone: 123 123 1234
                                </p>
                                <p className="phone-num ukrainian_language">
                                    Телефон: 123 123 1234
                                </p>
                                <p className="email">kristina@fitness.com</p>
                                <p className="address english_language">
                                    Gym located at: 123 Street name, City,
                                    Country
                                </p>
                                <p className="address ukrainian_language">
                                    Спортивний зал розташований за адресою: 123
                                    Street name, City, Country
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
