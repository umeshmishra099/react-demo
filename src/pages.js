import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>Company home page</h1>
            <nav>
                <Link to="about">About </Link>
                <Link to="contact">Contact</Link>
                <Link to="event">Link</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>About company page</h1>
            <Outlet />
        </div>
    );
}

export function CompanyHistory() {
    return (<div>
            <h2>Company History</h2>
    </div>);
}

export function CompanyServices() {
    return (<div>
        <h2>Company Service</h2>
    </div>);
}

export function Events() {
    return (
        <div>
            <h1>Events page</h1>
        </div>
    );
}


export function Contacts() {
    return (
        <div>
            <h1>Company contacts</h1>
        </div>
    );
}

export function NotFound() {
    let locationStateLocation = useLocation();
    console.log(locationStateLocation);
    return (
        <div>
            <h1>Page Not Found for {locationStateLocation.pathname}</h1>
        </div>
    );
}