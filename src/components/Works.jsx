import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const ProjectCard = (project) => {
    return (
      <motion.div
        variants={fadeIn("right", "spring", project.index * 0.5, 0.75)}
      >
        <Tilt
          style={{
            backgroundImage:
              "linear-gradient(45deg, #050816 , #1d1836 , purple, #050816 )",
            display: "inline-block",
            padding: 5,
            borderRadius: "2rem",
            width: "360px",
            maxWidth: "100%",
          }}
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              cursor: "pointer",
            }}
            onClick={() => window.open(project.source_code_link, "_blank")}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "2rem",
              }}
            />
          </div>
          <div
            style={{
              marginTop: "5px",
              padding: "5px",
              justifyContent: "center",
            }}
          >
            <h3>{project.name}</h3>
            <br />
            <p>{project.description}</p>
          </div>
        </Tilt>
      </motion.div>
    );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Hall Of Fame</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div style={{ display: "flex", width: "100%" }}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          // className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          style={{
            marginTop: "3px",
            color: "#aaa6c3",
            fontSize: "17px",
            maxWidth: "3xl",
            lineHeight: "30px",
          }}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {projects.map((item, index) => {
          return (
            <div key={`item-${index}`} index={index}>
              {ProjectCard({ ...item, index })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");

// import React from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../style";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt="project_image"
//             className="w-full h-full object-cover rounded-2xl"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="source code"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className="mt-20 flex flex-wrap gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");
