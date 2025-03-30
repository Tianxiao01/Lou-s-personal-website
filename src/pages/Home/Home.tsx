import IntroText from "./Intro_text";
import Logo from "./Logo";
import Bottom from "./Bottom";
import React from "react";
import "./Home.css";
import Top from "./Top";

const subpages = [
  { name: "Home", path: "/", height_fadeaway: -90 },
  { name: "Projects", path: "/Projects", height_fadeaway: 10 },
  { name: "Experience", path: "/Experience", height_fadeaway: 110 },
  { name: "Upcoming Projects", path: "/Ongoing", height_fadeaway: 210 },
];

const Home = () => {
  return (
    <div>
      <Top />

      <IntroText
        layout="intro_layout1"
        content={["WELCOME TO", "TIANXIAO'S WORLD"]}
        path={subpages[0].path}
        img="img1"
        height_fadeaway={subpages[0].height_fadeaway}
      />
      <IntroText
        layout="intro_layout2"
        content={["PROJECTS", "DRIVEN BY PASSION"]}
        path={subpages[1].path}
        img="img2"
        height_fadeaway={subpages[1].height_fadeaway}
      />
      <IntroText
        layout="intro_layout3"
        content={["EXPERIENCE", "SHAPING THE FUTURE"]}
        path={subpages[2].path}
        img="img1"
        height_fadeaway={subpages[2].height_fadeaway}
      />
      <IntroText
        layout="intro_layout4"
        content={["Ongoing", "FANCINATING PROJECT"]}
        path={subpages[3].path}
        img="img2"
        height_fadeaway={subpages[3].height_fadeaway}
      />
      <Bottom />
    </div>
  );
};

export default Home;
