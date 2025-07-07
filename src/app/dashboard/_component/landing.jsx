import React from "react";
import { ManPic } from "./manpic";

const Landing = () => {
  return (
    <div >
      <section className="bg-white lg:grid lg:h-[50h] lg:place-content-centerdark:bg-gray-900">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-1 sm:px-6 sm:py-8 md:grid md:grid-cols-2  md:gap-4  lg:px-8 lg:py-20">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              Track every <strong className="text-indigo-600">rupee, </strong>{" "}
              master your
              <strong className="text-indigo-600"> money. </strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-900 sm:text-lg/relaxed dark:text-gray-200">
              Track your expenses, set goals, and build better financial habits-
              all in one place.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6 justify-center">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="/login"
              >
                Get Started
              </a>
            </div>
          </div>

          {ManPic}
        </div>
      </section>
    </div>
  );
};

export default Landing;
