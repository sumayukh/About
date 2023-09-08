import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../style";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
        margin: "0 auto",
      }}
    >
      <div
        className={styles.paddingX}
        style={{
          position: "relative",
          inset: "0",
          top: "120px",
          maxWidth: "7xl",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "5px",
        }}
      >
        {/* <div
          // className="flex flex-col justify-center items-center mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <div
            // className="w-5 h-5 rounded-full bg-[#915eff]"
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "50%",
              backgroundColor: "#915eff",
            }}
          />
          <div
            // className="w-1 sm:h-8 h-40 violet-gradient"
            style={{
              width: "1px",
              height: "40px",
              "@media (min-width: 640px)": {
                height: "8px",
              },
              background: "linear-gradient(to bottom, #915eff, #6200ee)",
            }}
          />
        </div> */}
        <div>
          <h1 className={styles.heroHeadText} style={{ color: "white" }}>
            Hi, I'm <span style={{ color: "#915eff" }}>Sumayukh</span>
          </h1>
          <p
            style={{
              marginTop: "2px",
              color: "white",
            }}
          >
            I possess a vast and versatile nature of skill set, which when
            coupled with alacrity, helps me deliver results next to perfection
            in any kind of role that I undertake. I'm a diligent developer who
            believes in exhibiting a perfectly balanced blend of smartwork and
            hardwork to add value in a team effort.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      {/* <div
        // className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        style={{
          position: "relative",
          bottom: "32px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 639px)": {
            bottom: "10px",
          },
        }}
      >
        <a href="/about">
          <div
            // className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2"
            style={{
              marginTop: "4rem",
              width: "35px",
              height: "64px",
              borderRadius: "3rem",
              borderWidth: "4px",
              borderColor: "secondary",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2px",
            }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              // className="w-3 h-3 rounded-full bg-secondary mb-1"
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "secondary",
                marginBottom: "1px",
              }}
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;

// import { motion } from "framer-motion";

// import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Adrian</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop 3D visuals, user <br className="sm:block hidden" />
//             interfaces and web applications
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
