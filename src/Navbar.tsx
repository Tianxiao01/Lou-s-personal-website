import Logo from "./pages/Home/Logo";
import { Link } from "react-router-dom";
import Top from "./pages/Home/Top";
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const subpages = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/Projects" },
  { name: "Experience", path: "/Experience" },
  { name: "Future Plans", path: "/Ongoing" },
];



const Navbar = () => {
  const {width,height}=useWindowSize();

  return (
    <>
      <Top />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo size={width < height ? "8vh" : "6vw"} top={width < height ? "2vw" : "0px"} />
      </Link>

      <ul className="NavBar" style={{gap:width < height ? "3vh": undefined,left:width < height ? "5.5vh": undefined }}>
        {subpages.map((subpage, index) => (
          <li key={index} className="subpage" style={{  cursor: "pointer",fontSize: width < height ? "1.8vh" : undefined  }}>
            <Link to={subpage.path} style={{ textDecoration: "none", color: "inherit" }}>
              {subpage.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
