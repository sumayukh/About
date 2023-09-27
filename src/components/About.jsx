import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services, overview } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  const ServiceCard = (service) => {
    return (
      <Tilt
        // className="xs:w-[250px] w-full"
        style={{
          width: "100%",
          "@media (maxWidth: 600px)": {
            width: "250px",
          },
        }}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * service.index, 0.75)}
          style={{
            backgroundImage: "linear-gradient(90deg, #1d1836, purple)",
            padding: "1px",
            borderRadius: "20px",
            shadow: "card",
            cursor: "pointer",
          }}
          onClick={() => {
            const about = document
              .getElementById(`about-item-${service.index}`)
              .getBoundingClientRect();
            const experienceCard = document
              .getElementById(`experience-point-${service.index}`)
              .getBoundingClientRect();

            window.scrollTo({
              top:
                window.scrollY +
                about.bottom +
                experienceCard.y * service.index * 0.25,
              behavior: "smooth",
            });
          }}
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            style={{
              backgroundColor: "#1d1836",
              borderRadius: "20px",
              paddingX: 12,
              paddingY: 5,
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img
              src={service.icon}
              alt={service.title}
              // className="w-16 h-16 object-contain"
              style={{
                width: "12rem",
                height: "12rem",
                objectFit: "contain",
              }}
            />
            <h3
              // className="text-white text-[20px] font-bold text-center"
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {service.title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <>
      <motion.div style={{ paddingTop: "6rem" }} variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        style={{
          marginTop: "4px",
          color: "#aaa6c3",
          fontSize: "17px",
          maxWidth: "3xl",
          lineHeight: "30px",
        }}
        variants={fadeIn("right", "spring", 0.1, 1)}
      >
        {overview.title}
      </motion.p>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        {services.map((item, index) => (
          <div id={`about-item-${index}`} key={index}>
            {ServiceCard({ ...item, index })}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
