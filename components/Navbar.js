import { useState } from "react";
import Link from "./Link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-20 py-4 border-b items-center text-gray-800 shadow-sm">
      <div className="flex-1 justify-start">
        <ul className="flex">
          <li className="my-3 mr-3 hover:text-purple-400 transition ease-out duration-500 text-lg">
            <a href="#">About</a>
          </li>
          <li className="my-3 mr-3 hover:text-purple-400 transition ease-out duration-500 text-lg">
            <a href="#">Projects</a>
          </li>
          <li className="my-3 mr-3 hover:text-purple-400 transition ease-out duration-500 text-lg">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="font-dancing-script text-5xl flex-1 text-center">
        <a href="#">Razouq</a>
      </div>
      <div className="flex-1 t">
        <ul className="flex justify-end text-xl">
          <li className="my-2 ml-4 hover:text-purple-400 transition ease-out duration-500 text-lg">
            <i className="fab fa-github"></i>
          </li>
          <li className="my-2 ml-5 hover:text-purple-400 transition ease-out duration-500 text-lg">
            <i class="fab fa-twitter"></i>
          </li>
          <li className="my-2 ml-5 hover:text-purple-400 transition ease-out duration-500 text-lg">
            <i class="fab fa-youtube"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
