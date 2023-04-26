import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} w-full h-full z-0 px-28 bg-light dark:bg-dark`}
    >
      {children}
    </div>
  );
};

export default Layout;
