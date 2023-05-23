import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Navbar from "./components/navigation/Navbar";
import NoMatch from "./components/NoMatch";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <Navbar />

                    <div className="app-wrapper">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route path="*" elesemt={<NoMatch />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}
