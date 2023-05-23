import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Navbar from "./components/navigation/Navbar";
import About from "./components/pages/About";
import Schedule from "./components/pages/Schedule";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <Navbar />

                    <div className="app-wrapper">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route path="/pages/aboutme" element={<About />} />
                            <Route
                                path="/pages/schedule"
                                element={<Schedule />}
                            />
                            <Route path="*" element={<NoMatch />} />
                        </Routes>

                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}
