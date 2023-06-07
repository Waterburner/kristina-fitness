import React from "react";

export default function SchedulePage() {
    return (
        <div className="schedule-wrapper page-wrapper">
            <div className="schedule page">
                <div className="section-wrapper">
                    <div className="section">cool picture</div>
                </div>
                <div className="section-wrapper section-wrapper schedule-description-wrapper">
                    <div className="section schedule-description description">
                        description <b />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem velit laboriosam atque? Voluptatem, est quae
                        asperiores odit minima aut, quas facere ullam voluptatum
                        in sunt commodi repellat ipsum ex aliquid voluptatibus
                        quaerat quidem veritatis quam itaque tempora odio sed?
                        Labore provident nulla vitae tempora ad dolorum sapiente
                        quidem?
                    </div>
                </div>
                <div className="section-wrapper schedule-wrapper">
                    <div className="section schedule">
                        <div className="days">
                            <ul>
                                <li className="weekday">
                                    <p className="weekday-name">Monday</p>
                                    <div className="hours">
                                        <div>General training - 19:15</div>
                                        <div>Online training - 18:00</div>
                                    </div>
                                </li>
                                <li className="weekday">
                                    <p className="weekday-name">Tuesday</p>
                                    <div className="hours">
                                        <div>General training - 19:00</div>
                                        <div>Children training - 18:00</div>
                                    </div>
                                </li>
                                <li className="weekday">
                                    <p className="weekday-name">Wednesday</p>
                                    <div className="hours">
                                        <div>General training - 19:15</div>
                                        <div>Online Training - 18:00</div>
                                    </div>
                                </li>
                                <li className="weekday">
                                    <p className="weekday-name">Thursday</p>
                                    <div className="hours">
                                        <div>General training - 19:00</div>
                                        <div>Children training - 18:00</div>
                                    </div>
                                </li>
                                <li className="weekday">
                                    <p className="weekday-name">Friday</p>
                                    <div className="hours">
                                        <div>General training - 19:30</div>
                                        <div>Online training - 18:00</div>
                                    </div>
                                </li>
                                <li className="weekday">
                                    <p className="weekday-name">Saturday</p>
                                    <div className="hours">
                                        <div>General training - 10:00</div>
                                    </div>
                                </li>
                                <li className="weekday">
                                    <p className="weekday-name">Sunday</p>
                                    <div className="hours">
                                        <div>Relax day</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
