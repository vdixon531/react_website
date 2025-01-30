import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./AdvGallery.css"; // Add styles

const photos = [
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/ldk-1_w827sd.jpg", width: 4, height: 3, location: "Ladakh" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/ldk-2_savhe3.jpg", width: 3, height: 4, location: "Ladakh" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/ldk-3_yfiy8u.jpg", width: 4, height: 3, location: "Ladakh" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/ldk-4_mxq0q6.jpg", width: 4, height: 3, location: "Ladakh" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/ldk-5_ggcxb0.jpg", width: 4, height: 3, location: "Ladakh" },

  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186453/mh-1_shh9ka.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186453/mh-2_aawu6o.jpg", width: 3, height: 4, location: "Maharashtra" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186453/mh-3_tn9wum.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "/images/mh-4.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186453/mh-5_famv9p.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186457/mh-6_aqdvav.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186458/mh-7_a0t4vz.jpg", width: 4, height: 3, location: "Maharashtra" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186458/mh-8_vlvzme.jpg", width: 4, height: 3, location: "Maharashtra" },

  { src: "/images/ont-1.jpg", width: 4, height: 3, location: "Ontario" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186458/ont-2_hksqvg.jpg", width: 4, height: 3, location: "Ontario" },

  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186459/raj-1_zndtql.jpg", width: 4, height: 3, location: "Rajasthan" },
  { src: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186459/raj-2_qgysrf.jpg", width: 3, height: 4, location: "Rajasthan" },
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
