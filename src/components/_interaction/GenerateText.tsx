import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { TextGenerateProps } from "../../utilities/types";
import { cn } from "../../utilities/utility";

const GenerateText = ({
  words,
  className,
  childClassName,
}: TextGenerateProps) => {
  // animation hook
  const [scope, animate] = useAnimate();

  //   array of words
  const wordsArray: string[] = words.split(" ");

  // animation effect
  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 3,
        delay: stagger(0.3),
      },
    );
  });

  //   sub component to render animation
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span key={word + idx} className="text-black opacity-0">
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={cn(
            "text-sm leading-snug tracking-wide text-black md:text-lg lg:text-2xl dark:text-white",
            childClassName,
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default GenerateText;
