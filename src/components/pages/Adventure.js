import React from "react";
import '../../App.css';
import AdvGallery from "../AdvGallery";

// const Adventure = () => {
//     const location = useLocation();
//     const params = new URLSearchParams(location.search);
//     const selectedFilter = params.get("filter") || "All"; 
  
//     return (
//         <>  
//         <h1 className="adventure">ADVENTURE</h1>
//         <Gallery selectedFilter={selectedFilter} />
//         <Footer />
//         </>
//     );
//   };

export default function Adventure() {
  
     return (
         <>
             <h1 className="adventure">ADVENTURE</h1>
             <AdvGallery />
         </>
     )
};