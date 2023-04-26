import Link from "next/link";
import React from "react";
import Logo from "../logo/Logo";
import { useRouter } from "next/router";
import TwitterIcon from "../assets/svgs/TwitterIcon";
import GithubIcon from "../assets/svgs/GithubIcon";
import LinkedinIcon from "../assets/svgs/LinkedInIcon";
import PinterestIcon from "../assets/svgs/PinterestIcon";
import DribbleIcon from "../assets/svgs/DribbleIcon";
import SunIcon from "../assets/svgs/SunIcon";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import MoonIcon from "../assets/svgs/MoonIcon";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group text-dark dark:text-light`}
    >
      {title}

      <span
        className={`${
          router?.asPath === href ? "w-full" : "w-0"
        } h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center bg-light dark:bg-dark">
      <nav className="space-x-4">
        <CustomLink href={`/`} title="Home" className={``} />
        <CustomLink href={`/about`} title="About" className={``} />
        <CustomLink href={`/projects`} title="Projects" className={``} />
        <CustomLink href={`/articles`} title="Articlcs" className={``} />
      </nav>
      <nav className="flex items-center justify-between space-x-6">
        <ul className="space-x-6 flex justify-between items-center flex-wrap">
          <motion.li whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
            <Link href={`/`} target="_blank">
              <TwitterIcon className={`h-6 w-6`} />
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
            <Link href={`/s`} target="_blank">
              <GithubIcon
                className={`h-6 w-6 ${mode === "dark" && "bg-dark text-light"}`}
              />
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
            <Link href={`/`} target="_blank">
              <LinkedinIcon className={`h-6 w-6`} />
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
            <Link href={`/`} target="_blank">
              <PinterestIcon
                className={`h-6 w-6 dark:bg-light dark:rounded-full`}
              />
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} whileTap={{ scale: 0.8 }}>
            <Link href={`/`} target="_blank">
              <DribbleIcon className={`h-6 w-6`} />
            </Link>
          </motion.li>
        </ul>
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className={`p-1 bg-dark text-light dark:bg-light dark:text-dark rounded-full`}
        >
          {mode === "dark" ? (
            <MoonIcon className={`h-6 w-6 !fill-dark`} />
          ) : (
            <SunIcon className={`h-6 w-6 !fill-dark`} />
          )}
        </button>
      </nav>

      <div className={`absolute left-[50%] translate-x-[-50%] mt-2`}>
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
