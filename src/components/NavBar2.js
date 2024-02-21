import React from "react";
import { Link } from "react-router-dom";

import logoimg from "../assets/logoimg.png";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium text-purple-300 items-center mb-4 md:mb-0">
            {/* <img src="https://www.linkpicture.com/q/Screenshot_2023-09-22_233749-removebg-preview.png" width="24" height="24" className="w-14 h-10"/> */}
            <img src={logoimg} width="24" height="24" className="w-16 h-15" />
            <span class="ml-3 text-3xl font-mono">AKATSUKI</span>
          </a>
          <nav class="md:ml-auto items-center flex flex-wrap text-base justify-around">
            <Link
              to="/"
              class="mr-5 text-purple-300 hover:text-purple-500 font-mono text-2xl"
            >
              HOME
            </Link>
            <Link
              to="/jobs"
              className="mr-5 text-purple-300 hover:text-purple-500 font-mono text-2xl"
            >
              Green-Jobs
            </Link>
            <Link
              to="/steps"
              className="mr-5 text-purple-300 hover:text-purple-500 font-mono text-2xl"
            >
              WALKTHROUGH
            </Link>
            <Link
              to="/upload"
              className="mr-5 text-purple-300 hover:text-purple-500 font-mono text-2xl"
            >
              Dashboard
            </Link>

            <Link
              to="/team"
              className="mr-5 text-purple-300 hover:text-purple-500 font-mono text-2xl"
            >
              TEAM
            </Link>
          </nav>
          <button class="inline-flex items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">
            <Link to="/login" className="text-white font-mono text-xl">
              LOGIN
            </Link>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
