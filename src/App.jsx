import React from "react";
import Home from "./routes/Home";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Conservation from "./components/conservation/Conservation.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Conservation/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/" element={<Conservation />} /> */}
                {/* <Route path="/about" element={} /> */}
                {/* <Route path="/contact" element={} /> */}
                {/* <Route path="/map" element={} /> */}
            </Routes>
            <Footer />
        </>
    );
};

export default App;
