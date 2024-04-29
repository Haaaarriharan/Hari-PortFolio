import { motion } from "framer-motion";
import { styles } from "../styles";
import { Heros } from "./canvas";
import StarWrapper from "../hoc/SectionWrapper";
import image from "../assets/moon.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <section className={`relative w-full h-screen mx-auto overflow-x-hidden`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white flex flex-col`}>
              Hi, I'm <span className="text-[#915EFF]">Hariharan</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 flex flex-col`}
            >
              I have 2 years of experience
              <p>in full stack development</p>
            </p>
          </div>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
      <div style={{ overflowX: "hidden" }}>
        <Heros />
      </div>
    </div>
  );
};

export default StarWrapper(Hero, "profile");
