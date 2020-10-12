import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className="pageContent">
            <h2 className="pageTitle" data-testid="h1tag">Contact me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label><br />
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email address: </label><br />
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <br />
                <div>
                    <label htmlFor="message">Message: </label><br />
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                <br />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn" type="submit" data-testid="buttontag">Submit</button>
            </form>
        </div>
    );
}

export default Contact;