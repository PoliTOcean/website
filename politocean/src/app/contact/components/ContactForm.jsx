'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                }),
            });

            if (response.ok) {
                setSubmitMessage('Message sent successfully!');
                e.target.reset();
            }
            else {
                setSubmitMessage('Failed to send message. Please try again later.');
            }
        }
        catch (error) {
            setSubmitMessage('An error occurred. Please try again later.');
        }
        finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="bg-blue-deep/10 border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <FormField id="pers-info" label="Your Name and Surname" type="text" name="pers-info" placeholder="Your Name and Surname" required />
                <FormField id="email" label="Your E-mail" type="email" name="email" placeholder="Your Email" required />

                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" name="is_company" className="w-4 h-4 accent-cyan-400 rounded" />
                    <span className="text-sm text-sea-light/60 group-hover:text-sea-light transition-colors">
                        I&apos;m a Company, Public Entity or Institution
                    </span>
                </label>

                <FormField  id="message" label="Your Message" type="textarea" name="message" placeholder="Write something you would like to ask us" required />

                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" name="privacy" className="w-4 h-4 accent-cyan-400 rounded" required />
                    <span className="text-sm text-sea-light/60 group-hover:text-sea-light transition-colors">
                        I agree to the processing of my personal data in accordance with the{' '}
                        <a href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            Privacy Policy
                        </a>
                        .
                    </span>
                </label>

                <button type="submit" disabled={isSubmitting} className="mt-2 w-full bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-night font-bold text-base py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-cyan-500/20" >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>

                {submitMessage && <p className="text-cyan-400 text-sm text-center">{submitMessage}</p>}
            </form>
        </div>
    );
}

function FormField({ id, label, type = "text", ...props }) {
    const inputClasses = "w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-sea-light placeholder-white/20 focus:outline-none focus:border-cyan-400 transition-colors";

    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-xs uppercase tracking-widest text-sea-light/50 font-semibold">
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea id={id} rows={5} className={`${inputClasses} resize-none`} {...props} />
            ) : (
                <input id={id} type={type} className={inputClasses} {...props} />
            )}
        </div>
    )
}