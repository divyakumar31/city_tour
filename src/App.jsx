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
                {/* <Route path="/about" component={} /> */}
                {/* <Route path="/contact" component={} /> */}
                {/* <Route path="/map" component={} /> */}
            </Routes>
            <Footer />
        </>
    );
};

export default App;
