import CircularText from "@/assets/svg/CircularText";
import Link from "next/link";
import React from "react";

const HireMe = () => {
  return (
    <div className="fixed left-4  bottom-4 flex justify-center items-center overflow-hidden">
      <div className="w-48 h-auto relative flex justify-center items-center">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow" />

        <Link
          href={`mailto:imniloy8@gmail.com`}
          className="flex justify-center items-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark dark:bg-light text-light dark:text-dark hover:text-dark dark:hover:text-light hover:bg-light dark:hover:bg-dark font-semibold shadow-md border-2 border-solid border-dark h-20 w-20 rounded-full transition-all"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
