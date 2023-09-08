import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={styles.paddingX}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingY: "5px",
        position: "fixed",
        zIndex: 10,
        background: "linear-gradient(180deg, black, #050816, #1d1836, black)",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "7xl",
          margin: "0 auto",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "9rem",
                height: "9rem",
                objectFit: "contain",
              }}
            />
            <p
              style={{
                color: "#f3f3f3",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
              }}
            >
              Sumayukh Sinha&nbsp;
              <span>| Portfolio</span>
            </p>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
            }}
          >
            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    setActive(item.id);
                    const section = document
                      .getElementById(item.id)
                      .getBoundingClientRect();
                    window.scrollTo({
                      top: window.scrollY == 0 ? section.y : 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <Link
                    to={item.id}
                    style={{
                      color: active === item.id ? "#f3f3f3" : "#aaa6c3",
                      fontSize: "18px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#f3f3f3";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color =
                        active === item.id ? "#f3f3f3" : "#aaa6c3"; // Reset the color to its default value
                    }}
                  >
                    {item.title}
                  </Link>
                  <span style={{ color: "#aaa6c3" }}>&nbsp;|&nbsp;</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            // flex: "1",
            justifyContent: "flex-end",
            "@media (minWidth: 640px)": {
              display: "none",
            },
          }}
        >
          {!toggle && (
            <img
              src={menu}
              alt="menu"
              style={{
                width: "28px",
                height: "28px",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          )}
          {toggle && (
            <div
              style={{
                display: "flex",
                padding: "36px",
                background:
                  "linear-gradient(180deg, black, #050816, #1d1836, black)",
                position: "absolute",
                // top: "60px",
                // right: "0",
                // margin: "4px",
                // marginTop: "2px",
                minWidth: "140px",
                zIndex: "10",
                borderRadius: "20px",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: "4px",
                  "@media (minWidth: 640px)": {
                    display: "flex",
                  },
                }}
              >
                {navLinks.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(item.id);
                        const section = document
                          .getElementById(item.id)
                          .getBoundingClientRect();
                        window.scrollTo({
                          top: window.scrollY == 0 ? section.y : 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <Link
                        style={{
                          color: active === item.id ? "#f3f3f3" : "#aaa6c3",
                          fontFamily: "'Poppins', 'sans-serif",
                          fontSize: "16px",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = "#f3f3f3";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color =
                            active === item.id ? "#f3f3f3" : "#aaa6c3"; // Reset the color to its default value
                        }}
                        to={item.id}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <img
                src={close}
                alt="menu"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "-16px",
                  marginRight: "-16px",
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../style";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer flex ">
//             Adrian &nbsp;
//             <span className="sm:block hidden"> | JavaScript Mastery</span>
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain"
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
