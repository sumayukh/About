import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";

const Feedbacks = () => {
  const FeedbackCard = (feedback) => {
    return (
      <motion.div
        variants={fadeIn("", "spring", feedback.index * 0.5, 0.75)}
        // variants={{
        //   initial: fadeIn("", "spring", feedback.index * 0.5, 0.75),
        //   animate: floatOnTouch(),
        // }}
        // initial="initial"
        // animate="animate"
        // transition={floatOnTouch.transition}
        style={{
          background: "linear-gradient(90deg, #1d1836, purple)",
          // transform: "translateY(0px)",
          padding: "20px",
          borderRadius: "3rem",
          width: "380px",
          maxWidth: "100%",
        }}
      >
        <div style={{ marginTop: "1px" }}>
          <p
            style={{
              color: "white",
              letterSpacing: "wider",
              fontSize: "18px",
            }}
          >
            {feedback.testimonial} <br />
          </p>
          <div
            style={{
              marginTop: "7px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1px",
            }}
          >
            <div
              style={{
                flex: "1",
                flexDirection: "column",
                display: "flex",
                fontStyle: "italic",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                <span>@</span>
                {feedback.name}
              </p>
              <p
                style={{
                  marginTop: "1px",
                  color: "#aaa6c3",
                  fontSize: "12px",
                }}
              >
                {feedback.designation} of {feedback.company}
              </p>
            </div>
            <img
              src={feedback.image}
              alt={`feedback-by-${feedback.name}`}
              style={{
                objectFit: "cover",
                borderRadius: "100%",
              }}
            />
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    <div
    // style={{
    //   marginTop: "12px",
    //   background: "#000",
    //   borderRadius: "2rem",
    // }}
    >
      {/* <div
        className={styles.padding}
        style={{
          // background: "#1d1836",
          background: "linear-gradient(90deg, #1d1836, purple)",
          borderRadius: "2rem",
          // minHeight: "300px",
        }}
      > */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Don't trust me? That's okay. Neither did they initially{" "}
        </p>
        <h2 className={styles.sectionHeadText}>Testimonials</h2>
      </motion.div>
      {/* </div> */}
      <div
        className={styles.paddingX}
        style={{
          marginTop: "20px",
          paddingBottom: "14px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "space-evenly",
          flexWrap: "wrap",
          gap: "7px",
        }}
      >
        {testimonials.map((item, index) => {
          return <div key={index}>{FeedbackCard({ ...item, index })}</div>;
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks);

// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../style";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <p className="text-white font-black text-[48px]">"</p>

//     <div className="mt-1">
//       <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

//       <div className="mt-7 flex justify-between items-center gap-1">
//         <div className="flex-1 flex flex-col">
//           <p className="text-white font-medium text-[16px]">
//             <span className="blue-text-gradient">@</span> {name}
//           </p>
//           <p className="mt-1 text-secondary text-[12px]">
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");
