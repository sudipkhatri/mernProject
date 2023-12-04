import React from "react";
import HomeOne from "./HomeOne";
//import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import About from "../About";
import HomeFour from "./HomeFour";
import HomeFive from "./HomeFive";
import HomeSix from "./HomeSix";

export default function Home() {
  return (
    <div>
      <HomeOne />
      <HomeFour />
      <HomeFive />
      <HomeSix />
      {/* <HomeTwo /> */}
      <HomeThree />
      <About />
    </div>
  );
}
