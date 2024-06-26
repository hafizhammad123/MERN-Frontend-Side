import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-center">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#0082ca' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* Github */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#333333' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3 text-dark" style={{ backgroundColor: 'white' }}>
        © 2020 Copyright:
        <a className="text-body text-light" href="">MyWebsite.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
