

import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Navbar() {
    const copyEmail = () => {
        const email = "nishant927472@gmail.com"; // Replace with your actual email
        navigator.clipboard.writeText(email)
            .then(() => alert("Email copied to clipboard!"))
            .catch(err => console.error("Failed to copy: ", err));
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">
                        <div className="logo">N</div>
                    </a>
                    {/* <div className=" "> */}
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link active text-light" target="_blank" rel="noopener noreferrer" aria-current="page" href="https://github.com/nishant25kr">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light " target="_blank" rel="noopener noreferrer" aria-current="page" href="https://linkedin.com/in/nishant-kumar-239003232">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" rel="noopener noreferrer" aria-current="page" onClick={(e) => {
                                e.preventDefault(); // Prevents navigation
                                copyEmail();
                            }} href='/'>  📧 Email</a>
                        </li>
                    </ul>

                    {/* </div> */}
                </div>
            </nav>
        </div>
    );
}
