import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

function CardTest({ title, description, category }) {
  return (
    <div
      id="card1"
      className="bg-orange-500/10 h-full w-96 border-orange-500 rounded-3xl border-[6px] cursor-grab my-4 mx-5"
    >
      <header className="flex justify-between items-center mx-4 mt-3">
        <h1 className="font-bold text-[1.70rem]">Build out nav bar</h1>
        <div className="border-[6px] bg-red-500/20 text-red-500 rounded-xl border-red-500 text-sm font-black px-2 py-0">
          URGENT
        </div>
      </header>
      <section id="description-text">
        <p className="my-3 mx-4 leading-[1.35rem] font-regular">
          This is some context for the thing that I want to build. There are
          some things I want to add to the project.
        </p>
        <p className="my-3 mx-4 leading-[1.35rem] font-regular">
          Here&lsquo;s another thing. Just wanted to see what multiple
          paragraphs looked like.
        </p>
      </section>
      <footer className="flex justify-between mx-4 mt-4 mb-1 content-center">
        <h2 className="font-black text-orange-500">DEV</h2>
        <h2 className="font-black text-orange-500">DUE 7/17</h2>
        <DotsHorizontalIcon className="h-8 w-8 cursor-pointer pb-[0.35rem] text-orange-500" />
      </footer>
    </div>
  );
}

export default CardTest;
