import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="grid grid-cols-2 bg-white text-black p-4 px-12">
        <span>RemyK</span>
        <span className="flex justify-end space-x-12">
          <a>Work</a>
          <h2>About</h2>
          <h2>Contact</h2>
        </span>
      </nav>
    </header>
  );
};

export default Header;
