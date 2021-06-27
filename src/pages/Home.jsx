import React, { Fragment } from "react";
import "../pages/Home.css";
import BlurryBackground from "../components/blurry-bg/BlurryBackground";
import imgBackground from "../assets/imgs/bg-colorful.jpg";

const Home = () => {
  return (
    <main className="home__section">
      <BlurryBackground imgBackgroundUrl={imgBackground}></BlurryBackground>
    </main>
  );
};

export default Home;
