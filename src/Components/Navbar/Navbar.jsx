import React from "react";

const Navbar = () => {
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between bg-white shadow w-full px-20 py-5 items-center">
      <div class=" sm:mb-0 items-center">
        <span className="bg-black text-white font-bold rounded p-3 mx-2">
          News
        </span>
        <span className="text-black font-semibold">Portal</span>
      </div>
      <div className="flex flex-row align-center items-center">
        <div className="mx-4">
          <input
            className="px-4 py-3  rounded border-neutral-600"
            type="text"
            placeholder="Search Article"
          />
        </div>
        <a href="..." className="text-black font-bold ">
          <img src="../../Assets/log-out.png" alt="Log Out" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
