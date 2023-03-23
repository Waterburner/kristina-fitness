import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Navbar from "./components/navigation/navbar";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar />

                <Router>
                    <div className="app-wrapper">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            {/* <Route path="*" elesemt={<NoMatch />} /> */}
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}
