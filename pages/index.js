import Header from "@/components/header";
import React from "react";

const index = () => {
  return (
    <>
      <header className="grid grid-cols-2 bg-slate-100 p-24">
        <h1 className="flex justify-center items-center text-6xl text-black font-bold">
          Remy Kay Design
        </h1>
        <aside className="grid grid-cols-2">
          <nav className="grid text-black font-semibold text-xl justify-center">
            <a>Brand Identity</a>
            <a>Graphic Design</a>
            <a>Book Design</a>
            <a>Illustration</a>
            <a className="font-light">and you name it!</a>
          </nav>
          <aside className="flex items-center">
            <div>IMAGE</div>
          </aside>
        </aside>
      </header>

      <div className="flex bg-white p-24 flex-col justify-center items-center space-y-4">
        <h2 className="text-black text-4xl text-center tracking-wide leading-relaxed">
          Bring personal to
          <br />
          your designs
        </h2>
        <button className="text-black bg-slate-100 py-2 px-4">
          Get Connected
        </button>
      </div>

      <section className="bg-slate-100 p-24">
        <h1 className="text-black text-3xl font-bold">Featured Work</h1>
      </section>
    </>
  );
};

export default index;
