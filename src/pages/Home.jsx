import React from "react";
import { Announcements, Categories, Footer, Navbar, NewsLetter, Products, Slider } from "../components";

function Home() {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
