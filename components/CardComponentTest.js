import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

function CardTest({ title, description, category, dueDate, minutesDuration }) {
  let isUrgent = false;

  return (
    <div
      id="card1"
      className="bg-green-500/10 h-full w-[22rem] border-green-500 rounded-3xl border-[6px] cursor-grab my-4 mx-5"
    >
      <header className="flex justify-between items-center mx-4 mt-3">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="border-[6px] bg-red-500/20 text-red-500 rounded-full border-red-500 text-sm font-black px-2 py-0">
          !
        </div>
      </header>
      <section id="text-container" className="flex items-center my-3 mx-4">
        <div id="description-text">
          <p className="leading-[1.35rem] font-regular">{description}</p>
        </div>
        <div className="flex-col ml-3 mr-1 leading-4">
          <h2 className="flex font-black text-green-500 justify-center">
            {minutesDuration}
          </h2>
          <h2 className="flex text-xs font-black text-green-500">MIN</h2>
        </div>
      </section>
      <footer className="flex justify-between mx-4 mt-4 mb-1 content-center">
        <h2 className="font-black text-green-500">{category}</h2>
        <h2 className="font-black text-green-500">{dueDate}</h2>
        <DotsHorizontalIcon className="h-8 w-8 cursor-pointer pb-[0.35rem] text-green-500" />
      </footer>
    </div>
  );
}

export default CardTest;
