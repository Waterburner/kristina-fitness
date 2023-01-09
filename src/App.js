import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <div className="app-wrapper">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}
