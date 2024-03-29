import { motion } from "framer-motion";

const HeroTitle = ({ heading, subHeading, heroBgFill }) => {
  return (
    <>
      <motion.div
        whileInView={{ y: window.innerWidth < 768 ? 35 : 50 }}
        className="poppins-bold-italic flex flex-col flex-wrap items-center justify-center bg-opacity-50 bg-gradient-to-br from-purple-500 to-neutral-300 bg-clip-text py-4 text-center text-[23px] font-bold tracking-tight text-transparent xs:text-[34px] sm:text-3xl md:text-5xl md:leading-snug lg:gap-y-5 lg:text-6xl"
      >
        <div className="hidden gap-4 md:flex md:flex-col">
          <span
            className={`${heroBgFill !== "black" ? "text-gmzBackgroundDark" : ""}`}
          >
            {heading[0]}
          </span>
          <span
            className={`${heroBgFill !== "black" ? "text-gmzBackgroundDark" : ""}`}
          >
            {heading[1]}
          </span>
        </div>
        <div className="block md:hidden">
          <span
            className={`${heroBgFill !== "black" ? "text-gmzBackgroundDark" : ""}`}
          >
            {heading[0]}
            {heading[1]}
          </span>
        </div>
      </motion.div>
      <motion.p
        whileInView={{ y: window.innerWidth < 768 ? 10 : 40 }}
        className={`inter-var poppins-medium md:poppins-semibold mt-4 text-center text-xs font-normal md:text-lg ${heroBgFill !== "black" ? "text-black" : "text-white"} `}
      >
        {subHeading}
      </motion.p>
    </>
  );
};

export default HeroTitle;
