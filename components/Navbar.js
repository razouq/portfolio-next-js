import { useState, useRef, useEffect } from "react";
import IconsList from "../elements/IconsList";
import Icon from "../elements/Icon";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", fun);
    return () => {
      window.removeEventListener("resize", fun);
    };
  }, []);

  const fun = (e) => {
    console.log(e.currentTarget.innerWidth);
    setWidth(e.currentTarget.innerWidth);
  };

  return (
    <nav
      className="flex items-center justify-between px-8 py-4 text-white bg-opacity-0 sm:px-20"
      ref={navRef}
    >
      <div className="z-10 flex flex-col-reverse justify-between w-2/3 md:flex-row">
        <div className="justify-start flex-1">
          <ul
            className="fixed top-0 left-0 flex flex-col items-center justify-around w-full h-screen text-xl md:static md:justify-start md:h-full md:flex-row"
            style={width > 768 ? {} : show ? bigCircleStyle : smallCircleStyle}
          >
            <li className="transition duration-500 ease-out md:my-3 md:mr-10 hover:text-yellow-400">
              <a href="#">About</a>
            </li>
            <li className="transition duration-500 ease-out md:my-3 md:mr-10 hover:text-yellow-400">
              <a href="#">Projects</a>
            </li>
            <li className="transition duration-500 ease-out md:my-3 md:mr-10 hover:text-yellow-400">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="z-10 self-start flex-1 mt-3 text-3xl text-center md:hidden md:text-5xl">
          <a href="#">RAZOUQ</a>
        </div>
      </div>
      <div className="flex-1 hidden w-1/3 md:block">
        <IconsList>
          <Icon title="fa-github" />
          <Icon title="fa-twitter" />
          <Icon title="fa-youtube" />
        </IconsList>
      </div>
      <div className="z-20 flex self-start justify-end flex-1 w-6 h-4 mt-5 md:hidden">
        <button
          className="flex flex-col justify-between w-6 h-6 outline-none focus:outline-none"
          onClick={() => setShow((show) => !show)}
        >
          <div
            className={`w-full h-2 bg-white mb-1 rounded-sm transform duration-500 ${
              show ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-full h-2 bg-white mb-1 rounded-sm transform duration-500 ${
              show ? "-translate-x-20 bg-opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-full h-2 bg-white mb-1 rounded-sm transform duration-500 ${
              show ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>
    </nav>
  );
}

const smallCircleStyle = {
  clipPath: "circle(0px at 90% -10%)",
  backgroundColor: "#1F2937",
  transition: "clip-path 1s ease-out",
};

const bigCircleStyle = {
  clipPath: "circle(1000px at 90% -10%)",
  backgroundColor: "#1F2937",
  transition: "clip-path 1s ease-out",
};
