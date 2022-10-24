import React, { useState } from "react";

import { signOutFromEverywhere } from "../../Auth/FirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import logoutIcon from "../../Assets/log-out.png";

import storesSearchArticle, { selectSearchArticle } from "../../Stores/Store3";

const Navbar = () => {
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  const fetchArticle = storesSearchArticle(selectSearchArticle);

  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const searchArticle = async (e) => {
    if (e.key === "Enter") {
      await fetchArticle(userInput);
      navigate("/search");
    }
  };

  const signOut = async () => {
    await signOutFromEverywhere();
    navigate("/login");
  };

  return (
    <nav className="font-sans flex flex-row justify-between bg-white shadow w-full items-center px-5 py-3 lg:px-20 lg:py-8 ">
      <Link to="/" className="sm:mb-0 items-center">
        <span className="bg-black text-white font-bold rounded p-3 mx-2">
          News
        </span>
        <span className="text-black font-semibold">Portal</span>
      </Link>
      <div className="flex flex-row align-center items-center">
        <div className="md:mx-4">
          <input
            className="px-4 py-3 md:p-2 rounded border-neutral-600"
            type="text"
            placeholder="Search Article"
            value={userInput}
            onChange={onChangeHandler}
            onKeyPress={searchArticle}
          />
        </div>
        <button className="text-black font-bold" onClick={signOut}>
          <img className="w-10 h-10 p-1" src={logoutIcon} alt="Log Out" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
