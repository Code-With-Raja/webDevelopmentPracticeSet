import React from "react";

export default function HoverSubMenu() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative group">
        {/* Main Menu Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Menu
        </button>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-30000">
          <ul className="py-2">
            {/* Option 1 (With Submenu) */}
            <li className="relative px-4 py-2 hover:bg-gray-200 cursor-pointer group">
              Option 1
              {/* Submenu */}
              <div className="absolute left-full top-0 ml-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Submenu 1</li>
                  <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Submenu 2</li>
                </ul>
              </div>
            </li>

            {/* Option 2 (Without Submenu) */}
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 2</li>

            {/* Option 3 (With Submenu) */}
            <li className="relative px-4 py-2 hover:bg-gray-200 cursor-pointer group">
              Option 3
              {/* Submenu */}
              <div className="absolute left-full top-0 ml-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Submenu A</li>
                  <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Submenu B</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
