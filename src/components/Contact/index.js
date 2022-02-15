import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // handles the changes of form values
    function handleChange(e) {
        // isValid conditionals check if form inputs are valid
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // throw err if email is invalid
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            // throw err if user did not enter name or message text
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        // change formState to match user input if err is null
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    // handles form submission
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name'/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='text' defaultValue={email} onBlur={handleChange} name='email'/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;