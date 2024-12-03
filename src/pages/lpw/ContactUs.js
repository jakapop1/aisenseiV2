import React from 'react';

const ContactPage = () => {
  return (
    <div className="lpw-content max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions about our AI training platform for cyber analysts? We'd love to hear from you. 
          Our team is here to help you enhance your packet analysis and CTI skills with cutting-edge LLM technology.
        </p>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Contact Information</h3>
          <p className="text-gray-600">Email: info@aisensei.com</p>
          <p className="text-gray-600">Phone: (808) 123-4567</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Location</h3>
          <address className="text-gray-600 not-italic">
            University of Hawaii at Manoa<br />
            2500 Campus Road<br />
            Honolulu, HI 96822<br />
            United States
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
