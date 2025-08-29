import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full dark:text-white">
      <h1 className="text-3xl font-extrabold dark:text-blue-500">
        Header Menu
      </h1>
      <nav>
        <a className="mr-5 hover:underline hover:cursor-pointer">Home</a>
        <a className="mr-5 hover:underline hover:cursor-pointer">Login</a>
        {/* <button
          className=" hover:underline hover:cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark mode"}
        </button> */}
      </nav>
    </header>
  );
};

export default Header;
