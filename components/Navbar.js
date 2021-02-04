import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
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
      className="flex justify-between px-8 sm:px-20 py-4  items-center bg-opacity-0 text-white"
      ref={navRef}
    >
      <div className="flex justify-between flex-col-reverse md:flex-row w-2/3">
        <div className="flex-1 justify-start">
          <ul
            className=" fixed md:static flex text-xl h-screen flex-col items-center justify-around top-0 left-0 w-full md:h-full md:flex-row"
            style={
              width > 768
                ? {}
                : show
                ? {
                    clipPath: "circle(1000px at 90% -10%)",
                    backgroundColor: "blue",
                    transition: "clip-path 1s ease-out",
                  }
                : {
                    clipPath: "circle(0px at 90% -10%)",
                    backgroundColor: "blue",
                    transition: "clip-path 1s ease-out",
                  }
            }
          >
            <li className="md:my-3 md:mr-3 hover:text-blue-400 transition ease-out duration-500">
              <a href="#">About</a>
            </li>
            <li className="md:my-3 md:mr-3 hover:text-blue-400 transition ease-out duration-500">
              <a href="#">Projects</a>
            </li>
            <li className="md:my-3 md:mr-3 hover:text-blue-400 transition ease-out duration-500">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="self-start font-dancing-script text-3xl sm:text-5xl flex-1 text-center">
          <a href="#">RAZOUQ</a>
        </div>
      </div>
      <div className="flex-1 w-1/3 hidden md:block">
        <ul className="flex justify-end text-2xl">
          <li className="my-2 ml-4 hover:text-blue-400 transition ease-out duration-500">
            <i className="fab fa-github"></i>
          </li>
          <li className="my-2 ml-5 hover:text-blue-400 transition ease-out duration-500">
            <i className="fab fa-twitter"></i>
          </li>
          <li className="my-2 ml-5 hover:text-blue-400 transition ease-out duration-500">
            <i className="fab fa-youtube"></i>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex w-6 justify-end self-start mt-2 h-4 md:hidden">
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
