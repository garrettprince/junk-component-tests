import React from "react";
import {
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import {
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

function CardTest({ title, description, category }) {
  return (
    <div
      id="card1"
      className="bg-blue-500/10 h-full w-96 border-blue-500 rounded-3xl border-[6px] cursor-grab my-4 mx-5"
    >
      <header className="flex justify-between items-center mx-4 mt-3">
        <h1 className="font-bold text-[1.70rem]">
          Test to see what multiple lines look like.
        </h1>
        {/* <div className="border-[6px] bg-red-500/20 text-red-500 rounded-full border-red-500 text-sm font-black px-2 py-0">
          !
        </div> */}
      </header>
      <section id="text-container" className="flex items-center my-3 mx-4">
        <div id="description-text">
          <p className="leading-[1.35rem] font-regular">
            This is some context for the thing that I want to build. There are
            some things I want to add to the project.
          </p>
          <p className="leading-[1.35rem] font-regular mt-3">
            Here&lsquo;s another thing. Just wanted to see what multiple
            paragraphs looked like.
          </p>
          <p className="leading-[1.35rem] font-regular mt-3">
            This is a third paragraph. The purpose of this one is to see what a
            longer paragraph might look like.
          </p>
        </div>
        <div className="flex-col ml-3 mr-1 leading-4 cursor-pointer">
          <h2 className="flex font-black text-blue-500 justify-center">2</h2>
          <h2 className="flex text-xs font-black text-blue-500">HR</h2>
        </div>
      </section>
      <footer className="flex justify-between mx-4 mt-4 mb-1 content-center">
        <h2 className="font-black text-blue-500 cursor-pointer">COPY</h2>
        <h2 className="font-black text-blue-500 cursor-pointer">DUE 8/1</h2>
        <DotsHorizontalIcon className="h-8 w-8 cursor-pointer pb-[0.35rem] text-blue-500" />
      </footer>
    </div>
  );
}

export default CardTest;
