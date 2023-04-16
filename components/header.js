import React from "react";

const Header = () => {
  return (
    <>
      <nav className="grid grid-cols-2 bg-slate-100 text-black p-4 px-8">
        <span>LOGO</span>
        <span className="flex justify-end">
          <h2>Work</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </span>
      </nav>
    </>
  );
};

export default Header;
