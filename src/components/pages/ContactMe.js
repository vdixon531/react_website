import React from "react";
import '../../App.css';
import Footer from "../Footer";

export default function ContactMe() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
    };
    return (
        <>
            <div className="contact-me">
                <h1 className="contact-me">CONTACT ME</h1>
            </div>
            <div className="contact-form">
                <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <input type="submit" value="Submit" />
                </form>
            </div>
            <Footer />
        </>
    )
};