import React from "react";
import { motion } from "framer-motion";

const SkillName = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center absolute justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark px-6 py-3 shadow-dark dark:shadow-light cursor-pointer"
      whileHover={{ scale: 1.3 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      // viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="">
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative mb-4 flex items-center justify-center bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark dark:shadow-light cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          web
        </motion.div>

        <div className="mb-8">
          <SkillName name={`HTML`} x="-5vw" y="-10vw" />
          <SkillName name={`CSS`} x="5vw" y="10vw" />
          <SkillName name={`JAVASCRIPT`} x="-15vw" y="10vw" />
          <SkillName name={`NEXTJS`} x="25vw" y="11vw" />
          <SkillName name={`SOLIDITY`} x="20vw" y="23vw" />
          {/* <SkillName name={`css`} x="-5vw" y="-10vw" />
          <SkillName name={`css`} x="-5vw" y="-10vw" />
          <SkillName name={`css`} x="-5vw" y="-10vw" />
          <SkillName name={`css`} x="-5vw" y="-10vw" /> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
