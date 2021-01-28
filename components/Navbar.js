import { useState } from "react";
import Link from "./Link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-20 py-4 border-b items-center shadow-sm bg-blue-50">
      <div className="flex-1 justify-start hidden md:block">
        <ul className="flex text-xl">
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
      <div className="font-dancing-script text-5xl flex-1 text-center">
        <a href="#">RAZOUQ</a>
      </div>
      <div className="flex-1 hidden md:block">
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
      <div className="flex-1 flex w-6 justify-end h-4 md:hidden">
        <button className="w-6 outline-none focus:outline-none" onClick={e => console.log('hi')}>
          <div className="w-full h-1 bg-gray-700 mb-1 rounded-sm"></div>
          <div className="w-full h-1 bg-gray-700 mb-1 rounded-sm"></div>
          <div className="w-full h-1 bg-gray-700 mb-1 rounded-sm"></div>
        </button>
      </div>
    </nav>
  );
}
