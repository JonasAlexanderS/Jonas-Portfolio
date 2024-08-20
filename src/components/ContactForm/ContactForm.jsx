import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <section id="contact-form">
            <form
                action="https://airform.io/jonasasen123@gmail.com"
                id="form"
                method="post"
            >
                <h1 id="send-text">// Send meg en mail</h1>
                <input
                    type="text"
                    name="first"
                    placeholder="Fornavn*"
                    required
                />
                <input
                    type="text"
                    name="last"
                    placeholder="Etternavn*"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Epost*"
                    required
                />
                <textarea
                    name="message"
                    id="message"
                    cols="60"
                    rows="5"
                    placeholder="Din melding her*"
                    required
                ></textarea>
                <button type="submit" id="send-button">
                    Send melding
                </button>
                <p id="my-form-status"></p>
            </form>
        </section>
    );
};

export default ContactForm;
