import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [isHovering, setIsHovering] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={slideIn("left", "easeIn", 0.2, 1)}
        style={{
          flex: "0.75",
          background: "linear-gradient(180deg, black, #050816, #1d1836, black)",
          padding: "8rem",
          borderRadius: "2rem",
        }}
      >
        <p className={styles.sectionSubText}>Hit me up</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          style={{
            marginTop: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
          ref={formRef}
          onChange={handleChange}
          onSubmit={(e) => {
            e.preventDefault();
            setIsLoading(true);
            emailjs
              .send(
                "service_r0jcplm",
                "template_1t76uxq",
                {
                  from_name: form.name,
                  to_name: "Sumayukh",
                  from_email: form.email,
                  to_email: "sumayukh.sinha@yahoo.com",
                  message: form.message,
                },
                "Jqq9AvwIuSjoMiA5c"
              )
              .then(() => {
                setIsLoading(false);
                alert(
                  `Thank you for sending the email. I'll get back to you in a jiffy.`
                );
                setForm({
                  name: "",
                  email: "",
                  message: "",
                });
              })
              .error(() => {
                setIsLoading(false);
                console.log(error);
                alert(
                  `Oops! Looks like you couldn't get through. You might wanna try again.`
                );
              });
            console.log(e);
          }}
        >
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ color: "fff", marginBottom: "4px", fontWeight: "500" }}
            >
              Name
            </span>
            <input
              style={{
                background: "linear-gradient(90deg, #1d1836, purple)",
                paddingY: "4px",
                paddingX: "6px",
                placeholderColor: "#aaa6c3",
                color: "#f3f3f3",
                borderRadius: "8px",
                outline: "none",
                border: "none",
                fontWeight: "500",
              }}
              placeholder="Name"
              type="text"
              defaultValue={form.name}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ color: "fff", marginBottom: "4px", fontWeight: "500" }}
            >
              Email
            </span>
            <input
              style={{
                background: "linear-gradient(90deg, #1d1836, purple)",
                paddingY: "4px",
                paddingX: "6px",
                placeholderColor: "#aaa6c3",
                color: "#f3f3f3",
                borderRadius: "8px",
                outline: "none",
                border: "none",
                fontWeight: "500",
              }}
              placeholder="Email"
              type="email"
              defaultValue={form.email}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ color: "fff", marginBottom: "4px", fontWeight: "500" }}
            >
              Message
            </span>
            <textarea
              rows={2}
              style={{
                background: "linear-gradient(90deg, #1d1836, purple)",
                paddingY: "4px",
                paddingX: "6px",
                placeholderColor: "#aaa6c3",
                color: "#f3f3f3",
                borderRadius: "8px",
                outline: "none",
                border: "none",
                fontWeight: "500",
              }}
              placeholder="Message"
              defaultValue={form.message}
            />
          </label>
          <button
            style={{
              background: isHovering
                ? "radial-gradient(#1d1836, purple"
                : "#1d1836",
              paddingY: "3px",
              paddingX: "18px",
              outline: "none",
              borderRadius: "0.75rem",
              width: "30%",
              color: "#f3f3f3",
              fontWeight: "bold",
              boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            }}
            type="submit"
            onMouseOver={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        style={{
          flex: "1",
          height: "auto",
          "@media (minWidth: 1280px)": {
            height: "auto",
          },
          "@media (minWidth: 750px) and (maxWidth: 1279px)": {
            height: "100px",
          },
        }}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../style";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "JavaScript Mastery",
//           from_email: form.email,
//           to_email: "sujata@jsmastery.pro",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message</span>
//             <textarea
//               rows={7}
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What you want to say?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");
