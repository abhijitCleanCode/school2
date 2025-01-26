import React, { useState } from "react";
import { BlogList } from "./BlogList";
import { BlogControls } from "./BlogControls";
import ImageOne from "../FacultySection/Geetam.png";
import ImageTow from "../FacultySection/geeta.png";
import ImageThree from "../FacultySection/kamlesh.png";

export function BlogsData() {
  const [visibleBlogIndex, setVisibleBlogIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("prev");

  const blogs = [
    {
      geetamImg: ImageOne,
      Name: "Mr. Geetam Singh",
      Para: "Mathematics Faculty",
    },
    {
      geetamImg: ImageTow,
      Name: "Mrs. Geeta Rao",
      Para: "English Faculty",
    },
    {
      geetamImg: ImageThree,
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
