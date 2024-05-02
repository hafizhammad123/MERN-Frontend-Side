import React, { useState, useEffect } from 'react';

function Slider() {
  // State to manage current index of the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [
    "https://icms-image.slatic.net/images/ims-web/a6c327b5-3e4f-46cb-a423-9a6f36742f0c.png",
    "https://icms-image.slatic.net/images/ims-web/55c4d87e-78e7-44fe-900d-c7efe5563e5b.jpg",
    "https://icms-image.slatic.net/images/ims-web/cef49c06-abf7-44a5-883c-ababb2c1ccdb.jpg"
  ];

  // Function to increment index every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} width={1300} className="ms-4 mt-3" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
