import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./AdvGallery.css"; // Add styles

const photos = [
  { src: "/images/ldk-1.jpg", width: 4, height: 3, location: "Ladakh" },
  { src: "/images/ldk-2.jpg", width: 3, height: 4, location: "Ladakh" },
  { src: "/images/ldk-3.jpg", width: 4, height: 3, location: "Ladakh" },
  { src: "/images/ldk-4.jpg", width: 4, height: 3, location: "Ladakh" },
  { src: "/images/ldk-5.jpg", width: 4, height: 3, location: "Ladakh" },

  { src: "/images/mh-1.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "/images/mh-2.jpg", width: 3, height: 4, location: "Maharashtra" },
  { src: "/images/mh-3.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "/images/mh-4.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "/images/mh-5.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "/images/mh-6.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "/images/mh-7.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "/images/mh-8.jpg", width: 4, height: 3, location: "Maharashtra" },

  { src: "/images/ont-1.jpg", width: 4, height: 3, location: "Ontario" },
  { src: "/images/ont-2.jpg", width: 4, height: 3, location: "Ontario" },

  { src: "/images/raj-1.jpg", width: 4, height: 3, location: "Rajasthan" },
  { src: "/images/raj-2.jpg", width: 3, height: 4, location: "Rajasthan" },
  { src: "/images/raj-3.jpg", width: 4, height: 3, location: "Rajasthan" },
  { src: "/images/raj-4.jpg", width: 4, height: 3, location: "Rajasthan" }
];


const categories = ["All", "Maharashtra", "Ladakh", "Ontario", "Rajasthan", "Queensland"];

const AdvGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter images based on selected category
  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter(photo => photo.location === selectedCategory);

  return (
    <div className="gallery-container">

      {/* Filter buttons */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Photo gallery */}
      <div className="gallery-grid">
        {filteredPhotos.map((photo, index) => (
          <div className="photo-container" key={index} onClick={() => setLightboxIndex(index)}>
            <img src={photo.src} alt={photo.location} className="gallery-image" />
            <div className="photo-overlay">
              <p>{photo.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for full-screen viewing */}
      {lightboxIndex !== null && (
        <Lightbox
          mainSrc={filteredPhotos[lightboxIndex].src}
          nextSrc={filteredPhotos[(lightboxIndex + 1) % filteredPhotos.length]?.src}
          prevSrc={filteredPhotos[(lightboxIndex + filteredPhotos.length - 1) % filteredPhotos.length]?.src}
          onCloseRequest={() => setLightboxIndex(null)}
          onMovePrevRequest={() =>
            setLightboxIndex((lightboxIndex + filteredPhotos.length - 1) % filteredPhotos.length)
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)
          }
        />
      )}
    </div>
  );
};

export default AdvGallery;
