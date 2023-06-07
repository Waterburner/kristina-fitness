import React from "react";

// import training_pic from "../../assets/kristina_8490463045832235450_n.jpeg";

export default function SchedulePage() {
    return (
        <div className="schedule-wrapper page-wrapper">
            <div className="schedule page">
                <div className="section-wrapper">
                    <div className="section section-picture">
                        {/* cool picture */}
                    </div>
                </div>
                <div className="section-wrapper section-wrapper schedule-description-wrapper">
                    <div className="section schedule-description description">
                        General schedule for the following week
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
