import { useState } from "react";
import Link from "./Link";

export default function Navbar() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <nav className="flex justify-between px-20 py-4 border-b items-center shadow-sm bg-blue-50">
      <div className="flex justify-between flex-col-reverse md:flex-row w-2/3">
        <div className="flex-1 justify-start">
          <ul
            className={`transform duration-500 text-xl ${
              show ? "" : "hidden"
            } md:flex md:flex-row`}
          >
            <li className="my-3 mr-3 hover:text-blue-400 transition ease-out duration-500">
              <a href="#">About</a>
            </li>
            <li className="my-3 mr-3 hover:text-blue-400 transition ease-out duration-500">
              <a href="#">Projects</a>
            </li>
            <li className="my-3 mr-3 hover:text-blue-400 transition ease-out duration-500">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="self-start font-dancing-script text-5xl flex-1 text-center">
          <a href="#">RAZOUQ</a>
        </div>
      </div>
      <div className="flex-1 w-1/3 hidden md:block">
        <ul className="flex justify-end text-2xl">
          <li className="my-2 ml-4 hover:text-blue-400 transition ease-out duration-500">
            <i className="fab fa-github"></i>
          </li>
          <li className="my-2 ml-5 hover:text-blue-400 transition ease-out duration-500">
            <i class="fab fa-twitter"></i>
          </li>
          <li className="my-2 ml-5 hover:text-blue-400 transition ease-out duration-500">
            <i class="fab fa-youtube"></i>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex w-6 justify-end self-start mt-3 h-4 md:hidden">
        <button
          className="flex flex-col justify-between w-6 h-6 outline-none focus:outline-none"
          onClick={() => setShow((show) => !show)}
        >
          <div
            className={`w-full h-6 bg-gray-700 mb-1 rounded-sm transform duration-500 ${
              show ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-full h-6 bg-gray-700 mb-1 rounded-sm transform duration-500 ${
              show ? "-translate-x-20 bg-opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-full h-6 bg-gray-700 mb-1 rounded-sm transform duration-500 ${
              show ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>
    </nav>
  );
}
