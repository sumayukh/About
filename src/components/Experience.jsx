import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  const ExperienceCard = (experience) => {
    return (
      <VerticalTimelineElement
        position={experience.index % 2 == 0 ? "left" : "right"}
        contentStyle={{
          backgroundImage: "linear-gradient(45deg, black, #1d1836, purple)",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div>
            <img
              src={experience.icon}
              alt={experience.company_name}
              // className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3
            // className="text-white text-[24px] font-bold"
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {experience.title}
          </h3>
          <p
            // className="text-secondary text-[16px] font-semibold"
            style={{
              margin: 0,
              color: "#aaa6c3",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {experience.company_name}
          </p>
          <ul
            // className="mt-5 list-disc ml-5 space-y-2"
            style={{
              marginTop: "5px",
              listStyleType: "disc",
              marginLeft: "5px",
            }}
          >
            {experience.points.map((point, index) => (
              <li
                id={`experience-point-${index}`}
                key={`experience-point-${index}`}
                className="text-white text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Experience</p>
        <h2 className={styles.sectionHeadText}>Works</h2>
      </motion.div>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <VerticalTimeline lineColor="linear-gradient(180deg, black, #1d1836, purple)">
          {experiences.map((item, index) => (
            <div key={index} style={{ margin: "20px" }}>
              {ExperienceCard({ ...item, index })}
            </div>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");

// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../style";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className="w-[60%] h-[60%] object-contain"
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//         <p
//           className="text-secondary text-[16px] font-semibold"
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="text-white-100 text-[14px] pl-1 tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>
//           What I have done so far
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Work Experience.
//         </h2>
//       </motion.div>

//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");
