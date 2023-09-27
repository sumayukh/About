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
            <img src={experience.icon} alt={experience.company_name} />
          </div>
        }
      >
        <div>
          <h3
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {experience.title}
          </h3>
          <p
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
