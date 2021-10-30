import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import PopularTours from "../PopularTours/PopularTours";

const Homepage = () => {
  return (
    <div className="mb-0">
      <Banner></Banner>
      <Services></Services>
      <PopularTours></PopularTours>
      <Contact></Contact>
    </div>
  );
};

export default Homepage;
