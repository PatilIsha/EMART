import React from 'react';
import './Contact.css'; // Import the custom CSS file

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container my-5">
        <h1 className="display-3 text-center mb-4">Contact Us</h1>
        <p className="text-center mb-5">
          Have any questions or need support? Feel free to reach out to us using the form below, or contact us through the provided contact details.
        </p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="contact-info bg-light p-4 rounded shadow-sm">
              <h2 className="display-4 text-primary">Get in Touch</h2>
              <ul className="list-unstyled">
                <li><i className="fa fa-map-marker me-2"></i> 123 Main Street, Anytown, USA</li>
                <li><i className="fa fa-phone me-2"></i> (123) 456-7890</li>
                <li><i className="fa fa-envelope me-2"></i> contact@ishascollection.com</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <form className="contact-form bg-light p-4 rounded shadow-sm">
              <h2 className="display-4 text-primary">Send Us a Message</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
