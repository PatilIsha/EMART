import React from 'react';
import './About.css'; // Import the custom CSS file

const About = () => {
  return (
    <div className="about-page">
      <div className="overlay">
        <div className="container text-center text-light py-5">
          
          <p className="lead">
            Welcome to Isha's Collection! We offer a wide range of products to cater to all your needs.
            Our mission is to provide high-quality products at competitive prices, ensuring customer satisfaction.
          </p>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="section bg-dark text-light rounded shadow-sm">
              <h2 className="display-4 text-success">Our Vision</h2>
              <p>
                To be the leading e-commerce platform, known for our exceptional customer service and product variety.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="section">
              <h2 className="display-4 text-success">Our Values</h2>
              <ul className="list-unstyled">
                <li><i className="fa fa-check me-2"></i> Customer Satisfaction</li>
                <li><i className="fa fa-check me-2"></i> Integrity</li>
                <li><i className="fa fa-check me-2"></i> Innovation</li>
                <li><i className="fa fa-check me-2"></i> Quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
