import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10",
      }}
    >
      {technologies.map((item, index) => {
        return (
          <div style={{ width: "84px", height: "56px" }} key={item.name}>
            <BallCanvas icon={item.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
