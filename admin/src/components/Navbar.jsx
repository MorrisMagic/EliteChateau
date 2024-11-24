import React from "react";

function Navbar({ settoken }) {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <p className="sm:text-2xl text-xl font-medium">EliteChateau</p>
      <button
        onClick={() => settoken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
