import React from "react";
import image from "../Navbar/image";

function Navbar() {
  return (
    <div>
      <div>
        <nav class="fixed top-0 z-50 w-full border-2 rounded-lg  dark:bg-gray-700 ">
          <div class="px-3 py-2 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-start">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span class="sr-only">Open sidebar</span>
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <div className="bg-white p-1 rounded-lg">
                <a href="/" class="flex ml-2 ">
                  <img
                    src={image}
                    class="h-12 mr-3 font-bold"
                    alt="SpaceX Logo"
                  />
                </a>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex items-center ml-3">
                  <div
                    class="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                  >
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transperent dark:border-gray-100">
                      <li>
                        <a
                          href="/home"
                          class="block py-2 pl-3 pr-4 font-bold text-lg  bg-blue-700 rounded md:bg-transparent text-blue-800 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          class="block py-2 pl-3 pr-4 font-bold text-lg  bg-blue-700 rounded md:bg-transparent text-blue-800 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          class="block py-2 pl-3 pr-4 font-bold text-lg  bg-blue-700 rounded md:bg-transparent text-blue-800 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          About
                        </a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
