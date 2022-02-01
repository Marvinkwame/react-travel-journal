import React from "react"
import logo from "../components/logo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="travel-logo" />
            <p>my travel journal.</p>
        </nav>
    )
}