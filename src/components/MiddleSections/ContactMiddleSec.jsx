import { useState, useRef, useEffect } from 'react';
import emailJS from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './AboutMiddleSec.css';
import './ContactMiddleSec.css';

function Contact() {
    // Scroll to the top of the page when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // emailjs and form
    const form = useRef(null); // Corrected useRef declaration
    const sendEmail = (e) => {
        e.preventDefault();

        emailJS.sendForm('service_ahljxiv', 'template_imifcmg', form.current, 't1cogETF_-3uCWd8O')
            .then((result) => {
                alert('Message sent successfully!');
                console.log(result.text); // Debugging: Logs success result
            }, (error) => {
                alert('An error occurred, please try again.');
                console.error('EmailJS Error:', error); // Debugging: Logs error details
            });

        e.target.reset(); // Clear the form after submission
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(e); // Call sendEmail to send the form data
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            {/* Contact Form Section */}
            <section className="contact-form-section">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Please fill out the form below and we'll get in touch soon.</p>
                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="from_name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email_id">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </section>

            {/* Contact Information Section */}
            <footer className="footer">
                <div className="footer-content">

                    <div className="footer-column">
                        <h4><FontAwesomeIcon icon={faHome} /></h4>
                        <ul>
                            <li>1905 Xaba Street, Tokoza</li>
                            <li>Gauteng</li>
                            <li>1426</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4><FontAwesomeIcon icon={faEnvelope} /></h4>
                        <ul>
                            <li><a href="mailto:Tacitgroupza@gmail.com">Tacitgroupza@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4><FontAwesomeIcon icon={faPhone} /></h4>
                        <ul>
                            <li>(062) 749-6008</li>
                            <li>(065) 966-1341 </li>
                        </ul>
                    </div>

                    {/*<div className="footer-column">
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>*/}
                </div>
            </footer>

            <footer className="contact-footer">
                <p>© {new Date().getFullYear()} Tacit Group Supply Co. All rights reserved.</p>
                <p>Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a></p>
            </footer>
        </div>
    );
};

export default Contact;
