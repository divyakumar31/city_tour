import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import { Mail, Phone } from "./FooterSVGs";

const Footer = () => {
    const links = [
        { title: "HOME", to: "#" },
        { title: "ABOUT", to: "#" },
        { title: "MAP", to: "#" },
        { title: "CONSERVATION", to: "#" },
        { title: "CONTACT", to: "#" },
        { title: "PRIVACY POLICY", to: "#" },
    ];

    const column2 = [
        { title: "PLACES TO VISIT" },
        { title: "Historical" },
        { title: "religious & Spiritual" },
        { title: "Parks & Recreation" },
        { title: "Educational" },
        { title: "Tours & Packages" },
    ];

    const column3 = [
        { title: "EXPERIENCES" },
        { title: "Arts & Crafts" },
        { title: "Festivals & Events" },
        { title: "Food" },
        { title: "Nature" },
        { title: "Markets" },
    ];

    const column4 = [
        { title: "HERITAGE WALK" },
        { title: "Morning Walk" },
        { title: "Evening walk" },
    ];

    return (
        <footer className="text-white">
            <div className="left-part footer-flex gap-40">
                <div className="links">
                    {links.map((link, index) =>
                        link.to ? (
                            <div key={index}>
                                <NavLink className="text-white" to={link.to}>
                                    {link.title}
                                </NavLink>
                            </div>
                        ) : (
                            <div key={index}>
                                <p className="text-white">{link.title}</p>
                            </div>
                        )
                    )}
                </div>
                <div className="links">
                    {column2.map((link, index) =>
                        link.to ? (
                            <div key={index}>
                                <NavLink className="text-white" to={link.to}>
                                    {link.title}
                                </NavLink>
                            </div>
                        ) : (
                            <div key={index}>
                                <p className="text-white">{link.title}</p>
                            </div>
                        )
                    )}
                </div>
                <div className="links">
                    {column3.map((link, index) =>
                        link.to ? (
                            <div key={index}>
                                <NavLink className="text-white" to={link.to}>
                                    {link.title}
                                </NavLink>
                            </div>
                        ) : (
                            <div key={index}>
                                <p className="text-white">{link.title}</p>
                            </div>
                        )
                    )}
                </div>
                <div className="links">
                    {column4.map((link, index) =>
                        link.to ? (
                            <div key={index}>
                                <NavLink className="text-white" to={link.to}>
                                    {link.title}
                                </NavLink>
                            </div>
                        ) : (
                            <div key={index}>
                                <p className="text-white">{link.title}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="right-part text-white footer-flex flex-direction gap-40">
                <div className="footer-flex flex-direction gap-40 w-300 align-end">
                    <div className="row footer-flex gap-40">
                        <img
                            src="/src/assets/AhaLogo.png"
                            alt="Aha Logo"
                            height="50"
                            width="43"
                        />
                        <img
                            src="/src/assets/SmartCityAhmedabad.png"
                            alt="Aha Logo"
                            height="50"
                            width="82"
                        />
                        <img
                            src="/src/assets/ThirdLogo.png"
                            alt="Aha Logo"
                            height="50"
                            width="50"
                        />
                    </div>
                    <div className="row footer-flex justify-end">
                        <Phone />
                    </div>
                    <div className="row footer-flex justify-end">
                        <Mail />
                    </div>
                </div>
                <div className="w-300">
                    <p className="text-white">
                        &copy; Copyright {new Date().getFullYear()} Ahmedabad
                        Heritage City
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
