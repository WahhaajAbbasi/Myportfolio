import React from "react";
import Start from "@/app/components/hero/page.jsx";
import Marquee from "@/app/components/marquee/marquee.jsx";
import AboutMe from "@/app/components/aboutme.jsx"
import Expereince from "@/app/components/experience.jsx";

// HomeComponent.jsx
const HomeComponent = () => {
  return (
    <>
      <Start />
      <Marquee />
      <AboutMe />
      <Expereince />
    </>
  );
};

export default HomeComponent;
