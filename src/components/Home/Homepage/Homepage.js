import React from "react";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Homepage;
