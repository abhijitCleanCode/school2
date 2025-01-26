import React, { useState } from "react";
import { BlogList } from "./BlogList";
import { BlogControls } from "./BlogControls";

import { geeta, geetam, kamlesh } from "../../assets";

export function BlogsData() {
  const [visibleBlogIndex, setVisibleBlogIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("prev");

  const blogs = [
    {
      geetamImg: geeta,
      Name: "Mr. Geetam Singh",
      Para: "Mathematics Faculty",
    },
    {
      geetamImg: geetam,
      Name: "Mrs. Geeta Rao",
      Para: "English Faculty",
    },
    {
      geetamImg: kamlesh,
      Name: "Dr. Kamlesh Srivastva",
      Para: "Science Faculty",
    },
  ];

  // Handler for navigating the blogs
  const handleNext = () => {
    setVisibleBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    setActiveButton("next");
  };

  const handlePrev = () => {
    setVisibleBlogIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
    setActiveButton("prev");
  };

  return (
    <div className="mx-7 mt-12 lg:mx-20">
      {/* Render BlogList */}
      <BlogList blogs={blogs} visibleBlogIndex={visibleBlogIndex} />

      {/* Render BlogControls */}
      <BlogControls
        handlePrev={handlePrev}
        handleNext={handleNext}
        activeButton={activeButton}
      />
    </div>
  );
}
