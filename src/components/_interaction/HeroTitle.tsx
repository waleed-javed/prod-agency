import { motion } from "framer-motion";

const HeroTitle = ({ heading, subHeading, heroBgFill }) => {
  return (
    <>
      <motion.div
        whileInView={{ y: 50 }}
        className="poppins-bold-italic flex flex-col flex-wrap items-center justify-center gap-y-5 bg-opacity-50 bg-gradient-to-br from-purple-500 to-neutral-300 bg-clip-text py-4 text-center text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl md:leading-snug lg:text-6xl"
      >
        <span className={`${heroBgFill !== "black" ? "text-black" : ""}`}>
          {heading[0]}
        </span>
        <span className={`${heroBgFill !== "black" ? "text-black" : ""}`}>
          {heading[1]}
        </span>
      </motion.div>
      <motion.p
        whileInView={{ y: 40 }}
        className={`inter-var poppins-semibold mt-4 text-center text-base font-normal ${heroBgFill !== "black" ? "text-black" : "text-white"} md:text-lg`}
      >
        {subHeading}
      </motion.p>
    </>
  );
};

export default HeroTitle;
