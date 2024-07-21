import React from "react";

const Navbar = () => {
    return (
        <nav className="flex">
            <ul className="flex">
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>
                    <a href="#history">HISTORY</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#popular">POPULAR</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
