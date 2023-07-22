import React from "react"
import { Outlet } from "react-router"
import Navbar from "./Navbar"
// import Footer from "./Footer"


export default function MainLayout() {
    return (
        <div className="relative font-Ubuntu h-screen" data-theme="light">
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
            {/* <hr /> */}
            {/* <p>Footer</p> */}
        </div>
    )
} 