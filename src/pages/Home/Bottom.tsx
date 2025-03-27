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

const Bottom = () => {
  const {width,height}=useWindowSize();

  return <div className="Bottom">
        <div className="Additional_info1">Contact: <br/>
        phone: (+1) 2369912162<br/>
        email: TianxiaoLou@outlook.com
        </div>
        <div className="Additional_info2" style={{right: width<height ? "0px":undefined,
                                                left: width<height ? "10vw":undefined,
                                                top: width<height ? "17vh":undefined}}>
        Wherer am I currently: <br/>
        Country: Canada <br/>
        Location: University of Waterloo, 200 Universit Ave W, N2J, 4B6
        </div>
       </div>;
};



export default Bottom;
