import React from "react";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <div className="bg-red-500 top-0 flex justify-between items-center text-white h-20">
      <div className="ml-6">
        <h1 className="font-bold text-4xl">Quiz App</h1>
      </div>
      <div className="flex m-6">
        <HeaderButton text="Home" to="/" />
        <HeaderButton text="Question" to="/question" />
        <HeaderButton text="State" to="/state" />
        <HeaderButton text="Quiz" to="/quiz" />
      </div>
    </div>
  );
};

export default Header;
