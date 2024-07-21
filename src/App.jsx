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
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/about" element={} /> */}
                {/* <Route path="/contact" element={} /> */}
                {/* <Route path="/map" element={} /> */}
            </Routes>
            <Footer />
        </>
    );
};

export default App;
