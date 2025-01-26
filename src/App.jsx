import React from "react";

import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default App;
