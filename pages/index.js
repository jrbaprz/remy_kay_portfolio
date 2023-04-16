import Header from "@/components/header";
import WorkCard from "@/components/workCard";
import React from "react";

const index = () => {
  return (
    <>
      <header className="grid grid-cols-2 bg-neutral-100 p-24">
        <h1 className="flex justify-center items-center text-6xl text-black font-bold tracking-wider">
          Remy Kay
          <br />
          Design
        </h1>
        <aside className="grid grid-cols-2">
          <nav className="grid text-black font-semibold text-xl justify-center">
            <h2>Brand Identity</h2>
            <h2>Graphic Design</h2>
            <h2>Book Design</h2>
            <h2>Illustration</h2>
            <h2 className="font-light">and you name it!</h2>
          </nav>
          <aside className="flex items-center text-black">
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
        <button className="text-black bg-neutral-100 py-2 px-4">
          Get Connected
        </button>
      </div>

      <section className="bg-neutral-100 p-24">
        <h1 className="text-black text-3xl font-bold py-6">Featured Work</h1>
        <WorkCard />
      </section>
    </>
  );
};

export default index;
