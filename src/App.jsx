import React from "react";
import Home from "./routes/Home";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={() => <h1>About</h1>} />
                <Route path="/contact" component={() => <h1>Contact</h1>} />
                <Route path="/map" component={() => <h1>Map</h1>} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
