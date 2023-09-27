import React from "react";
import { ComputersCanvas } from "./canvas";
import { styles } from "../style";
import { overview } from "../constants";

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
        <div style={{ marginTop: "24px" }}>
          <h1 className={styles.heroHeadText} style={{ color: "white" }}>
            Hi, I'm <span style={{ color: "#915eff" }}>Sumayukh</span>
          </h1>
          <p
            style={{
              marginTop: "2px",
              color: "white",
            }}
          >
            {overview.title}
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
