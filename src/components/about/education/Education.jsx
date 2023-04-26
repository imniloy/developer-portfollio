import { useScroll, motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import LiIcon from "../utils/LiIcon";

const Details = ({ type, time, info, place }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        className=""
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>

        <span className="capitalize font-medium text-dark/75 ">
          {time} | {place}
        </span>
        <p className="font-bold w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-14 top-8 w-1 h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* first */}
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place=" Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />

          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place=" Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place=" Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place=" Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
