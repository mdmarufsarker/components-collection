"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import navLinks from "./Menu";

export default function Navbar() {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  function handleClick(e: any) {
    if (e.target.contains(ref.current)) 
      setShowMenu(false);
  }

  function hideNavbar() {
    setShowMenu(false);
  }
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 pr-6">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between text-lightWhite ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center cursor-pointer text-2xl "
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="p-0 m-0"
          />
          <hr className="w-[.5px] h-8 -ml-5 bg-lightWhite " />
          <h2 className="font-heading px-2">Maruf</h2>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            {navLinks.map(
              ({
                id,
                link,
                title,
                initialY,
                initialOpacity,
                animateY,
                animateOpacity,
                transitionDuration,
                transitionDelay,
              }) => {
                return (
                  <Link
                    key={id}
                    href={link}
                    className="font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: initialY, opacity: initialOpacity }}
                      animate={{ y: animateY, opacity: animateOpacity }}
                      transition={{
                        duration: transitionDuration,
                        delay: transitionDelay,
                      }}
                    >
                      {title}
                    </motion.li>
                  </Link>
                );
              }
            )}
          </ul>
          <a href="/resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="px-4 py-2 rounded-md border hover:bg-hoverColor duration-300 hover:bg-lightWhite hover:text-lightBlack text-[15px]"
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Small Icon Section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textCyan cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textYellow inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)} onClick={handleClick}
            className="absolute mdl:hidden top-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[75%] h-full overflow-y-scroll scrollbarHide bg-[#0b0b0b] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-red-500 cursor-pointer absolute top-12 right-12"
              />
              <div>
                <ul className="flex flex-col text-base gap-7 mt-24">
                  {navLinks.map(
                    ({
                      id,
                      link,
                      title,
                      initialY,
                      initialOpacity,
                      animateY,
                      animateOpacity,
                      transitionDuration,
                      transitionDelay,
                    }) => {
                      return (
                        <Link
                          key={id}
                          href={link}
                          className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer duration-300 nav-link" onClick={hideNavbar}
                        >
                          <motion.li
                            initial={{ y: initialY, opacity: initialOpacity }}
                            animate={{ y: animateY, opacity: animateOpacity }}
                            transition={{
                              duration: transitionDuration,
                              delay: transitionDelay,
                            }}
                          >
                            {title}
                          </motion.li>
                        </Link>
                      );
                    }
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
