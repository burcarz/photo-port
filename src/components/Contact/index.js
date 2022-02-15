import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // handles the changes of form values
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
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
                    <input type='text' defaultValue={name} onChange={handleChange} name='name'/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='text' defaultValue={email} onChange={handleChange} name='email'/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;