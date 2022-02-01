import React from "react";
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar.js"
import Places from "./components/Places.js"
import data from "./data.js"

export default function App() {
    const myInfo = data.map( item => {
        return (
            <Places 
            key={item.id}
            item={item}
            />
        )
    })


    return (
        <div>
            <Navbar />
            <section className="travel-content">
                {myInfo}
            </section>
        </div>
    )
}